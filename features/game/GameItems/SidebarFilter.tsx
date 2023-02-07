import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Iconify from "@/components/Iconify";
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Box,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { COLOR, KomoverseTag } from "@/utils/globalVariable";
import Solana from "public/solana.svg";
import MenuPopover from "@/components/MenuPopover";
import SidebarFilterField from "./SidebarFilterField";
import useResponsive from "@/hooks/useResponsive";
import { ICollectionItemProps, ISidebarFilterProps } from "./types";

const CollectionItem = ({
  image,
  name,
  volume,
  floor,
}: ICollectionItemProps) => {
  return (
    <Box display="flex">
      <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 48, height: 48 }}
        variant="rounded"
      />
      <Box display="flex" flexDirection="column" ml={2}>
        <Typography variant="h6">{name}</Typography>
        <Box display="flex" flexDirection="row" gap={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
            <Typography variant="subtitle2" fontWeight={500}>
              {floor} floor
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
            <Typography variant="subtitle2" fontWeight={500}>
              {volume} volume
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const MarketSidebar = ({
  collections = [],
  currCollection,
  setCurrCollection,
  filters,
}: ISidebarFilterProps) => {
  const [isExpand, setIsExpand] = useState(true);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleClose = () => setOpen(false);

  const selectedCollection = collections.find(
    (coll) => coll.collection_address === currCollection
  );
  const handleSelectCollection = (val: string) => {
    setCurrCollection(val);
    handleClose();
  };
  const isNotDesktop = useResponsive("down", "lg");
  const sidebarWidth = isNotDesktop ? "100%" : "360px";

  useEffect(() => {
    if (isNotDesktop) {
      setIsExpand(true);
    }
  }, [isNotDesktop]);

  return (
    <Box
      sx={{
        maxWidth: isExpand ? sidebarWidth : "50px",
        flexGrow: 1,
        borderRight: "solid 1px",
        borderColor: "divider",
        bgcolor: COLOR.backgroundRoot,
        position: "sticky",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        bgcolor={COLOR.backgroundRoot}
        color={COLOR.baseGray}
      >
        {isExpand && <Typography variant="overline">filters</Typography>}
        {!isNotDesktop && (
          <Iconify
            onClick={() => setIsExpand(!isExpand)}
            icon={isExpand ? "mdi:keyboard-tab-reverse" : "mdi:keyboard-tab"}
          />
        )}
      </Box>
      {isExpand && (
        <>
          <Accordion
            ref={anchorRef}
            expanded={false}
            onChange={() => setOpen(!open)}
          >
            <AccordionSummary expandIcon={<Iconify icon="mdi:chevron-down" />}>
              {selectedCollection && (
                <CollectionItem
                  image={selectedCollection.thumbnail_url}
                  name={selectedCollection.collection_name}
                  volume={selectedCollection.volume}
                  floor={selectedCollection.floor_price}
                />
              )}
            </AccordionSummary>
          </Accordion>
          {Object.keys(filters).map((key) => (
            <SidebarFilterField
              key={key}
              attributes={key}
              options={filters[key].values}
              isOpen={filters[key].isOpen as boolean}
              setExpand={() => (filters[key].isOpen = !filters[key].isOpen)}
            />
          ))}
          <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{
              width: "360px",
              "& .MuiMenuItem-root": {
                px: 1,
                typography: "body2",
                borderRadius: 0.75,
              },
            }}
          >
            <Stack spacing={4}>
              {collections.map((coll, i) => (
                <MenuItem
                  key={coll.collection_address}
                  selected={coll.collection_address === currCollection}
                  onClick={() =>
                    handleSelectCollection(coll.collection_address)
                  }
                >
                  <CollectionItem
                    image={coll.thumbnail_url}
                    name={coll.collection_name}
                    volume={coll.volume}
                    floor={coll.floor_price}
                  />
                </MenuItem>
              ))}
            </Stack>
          </MenuPopover>
        </>
      )}
    </Box>
  );
};

export default MarketSidebar;

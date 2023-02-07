import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import MarketSidebar from "./SidebarFilter";
import { getCollectionItems, getMarketCollections } from "@/services/games";
import { useSelector } from "react-redux";
import { ReduxState } from "@/types/redux";
import GameItem from "./GameItem";
import GameSearchField from "./GameSearchField";
import { mapFilters, mapMarketItems } from "./helpers";
import useDebounce from "@/hooks/useDebounce";
import Iconify from "@/components/Iconify";

const GameMarket = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const [currCollection, setCurrCollection] = useState<string>("");

  const { data: collections } = useQuery(["getMarketCollections", gameId], () =>
    getMarketCollections(gameId as string)
  );

  const {
    data: _marketItems,
    isError,
    isLoading,
    refetch,
  } = useQuery(["getCollectionItems", currCollection], () =>
    getCollectionItems(currCollection)
  );

  useEffect(() => {
    if (collections) {
      setCurrCollection(collections[0].collection_address);
    }
  }, [collections]);

  const filters = mapFilters(_marketItems);
  const selectedFilter = useSelector(
    (state: ReduxState) =>
      state.market?.value && Object.values(state.market?.value).flat()
  );

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const debouncedSearchKeyword: string = useDebounce<string>(
    searchKeyword,
    500
  );

  const [sortKey, setSortKey] = useState<string>("DATE_ASC");
  // TDOD: get user address fro login
  const userWalletAddres = "";
  const [isDisplayUserItems, setIsDisplayUserItems] = useState<boolean>(false);

  const onDisplayUserItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisplayUserItems(event.target.checked);
  };

  if (isError || isLoading) {
    return null;
  }

  const isLoginBanner = !userWalletAddres && isDisplayUserItems;

  const marketItems = mapMarketItems(
    _marketItems,
    selectedFilter,
    debouncedSearchKeyword,
    sortKey,
    isDisplayUserItems,
    userWalletAddres
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
      }}
    >
      <MarketSidebar
        collections={collections}
        currCollection={currCollection}
        setCurrCollection={setCurrCollection}
        filters={filters}
      />
      <Box component="section" sx={{ flexGrow: 1, p: 3 }}>
        <GameSearchField
          sortKey={sortKey}
          setSortKey={setSortKey}
          setKeyword={setSearchKeyword}
        />
        <Box sx={{ py: 1, display: "flex" }} gap={2}>
          <Button color="info" onCanPlay={() => refetch()}>
            <Iconify icon="mdi:sync" height={24} width={24} color="#29b6f6" />
          </Button>
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={isDisplayUserItems}
                onChange={onDisplayUserItems}
              />
            }
            label="Show only your items"
          /> */}
        </Box>

        {isLoginBanner && (
          <Box
            bgcolor="#202020"
            p={4}
            sx={{ borderRadius: "16px", textAlign: "center" }}
          >
            <Typography>Connect a wallet to see your items.</Typography>
          </Box>
        )}

        {!isLoginBanner && (
          <Box
            display="grid"
            gap={2}
            sx={{
              mt: 1,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
              },
            }}
          >
            {marketItems.map((item: any, i: number) => (
              <GameItem
                key={i}
                imageUrl={item.nft.cached_image_uri}
                name={item.nft.name}
                price={item.price}
                createdDate={item.created_at}
                currency={item.currency_symbol}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GameMarket;

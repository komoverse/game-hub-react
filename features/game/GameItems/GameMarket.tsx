import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import CardImage from "@/components/CardImage";
import Image from "next/image";
import { shortenTitleGame } from "@/utils/shorten";
import { dateFromNow } from "@/helper/date";
import { COLOR, KomoverseTag } from "@/utils/globalVariable";
import Solana from "public/solana.svg";
import { Button } from "@/features/home/event/style";
import MarketSidebar from "./MarketSidebar";
import { getCollectionItems, getMarketCollections } from "@/services/games";

function mapFilters(data) {
  const attrs = data.map((item) => item.nft.attributes_array).flat();
  let finalAttrs = {};

  attrs.forEach((el) => {
    if (finalAttrs[el.trait_type] === undefined) {
      finalAttrs = {
        ...finalAttrs,
        [el.trait_type]: { values: [el.value] },
      };
    } else {
      if (!finalAttrs[el.trait_type].values.includes(el.value)) {
        finalAttrs[el.trait_type].values.push(el.value);
      }
    }
  });

  return finalAttrs;
}

const GameMarket = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const [currCollection, setCurrCollection] = useState<string>("");

  const { data: collections } = useQuery(["getMarketCollections", gameId], () =>
    getMarketCollections(gameId as string)
  );

  const {
    data: marketItems,
    isError,
    isLoading,
  } = useQuery(["getCollectionItems", currCollection], () =>
    getCollectionItems(currCollection)
  );

  useEffect(() => {
    if (collections) {
      setCurrCollection(collections[0].collection_address);
    }
  }, [collections]);

  if (isError || isLoading) {
    return null;
  }

  const filters = mapFilters(marketItems);

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
        <Box sx={{ height: "64px", border: "solid 1px #fff" }}></Box>
        <Box
          display="grid"
          gap={2}
          sx={{
            mt: 4,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
          }}
        >
          {marketItems.map((item, i) => (
            <CardImage key={i} image_url={item.nft.cached_image_uri}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  {shortenTitleGame(item.nft.name)}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 400, color: COLOR.baseGreen }}
                >
                  {dateFromNow(item.created_at)}
                </Typography>
              </CardContent>
              <Button>
                <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, marginLeft: 1 }}
                >
                  {item.price}
                </Typography>
              </Button>
            </CardImage>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GameMarket;

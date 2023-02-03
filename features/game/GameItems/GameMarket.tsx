import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import MarketSidebar from "./SidebarFilter";
import { getCollectionItems, getMarketCollections } from "@/services/games";
import { useSelector } from "react-redux";
import { ReduxState } from "@/types/redux";
import { IFilterOption } from "./types";
import GameItem from "./GameItem";
import _intersection from "lodash.intersection";

function mapFilters(
  data: Array<{
    nft: {
      attributes_array: Array<{ [key: string]: string }>;
    };
  }>
) {
  if (!data) {
    return {};
  }
  const attrs = data.map((item) => item.nft.attributes_array).flat();

  let finalAttrs: IFilterOption = {};

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

function flattenMarketItems(data: any) {
  return data.map((item: any) => {
    const attrs = item.nft.attributes_array.flat();
    let finalAttrs: string[] = [];

    attrs.forEach((el: any) => {
      finalAttrs.push(el.value);
    });

    return {
      ...item,
      attributes: finalAttrs,
    };
  });
}

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

  if (isError || isLoading) {
    return null;
  }

  const marketItems = flattenMarketItems(_marketItems).filter((item: any) => {
    const intersect = _intersection(selectedFilter, item.attributes);

    if (intersect.length !== 0 && selectedFilter !== undefined) {
      return item;
    }

    if (selectedFilter === undefined || selectedFilter.length === 0 ) {
      return item;
    }
  });
  console.log("🚀 ~ GameMarket ~ marketItems", marketItems);

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
      </Box>
    </Box>
  );
};

export default GameMarket;

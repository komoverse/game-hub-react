import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import MarketSidebar from "./SidebarFilter";
import { getCollectionItems, getMarketCollections } from "@/services/games";
import { useSelector } from "react-redux";
import { ReduxState } from "@/types/redux";
import GameItem from "./GameItem";
import GameSearchField from "./GameSearchField";
import { mapFilters, mapMarketItems } from "./helpers";
import useDebounce from "@/hooks/useDebounce";

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

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const debouncedSearchKeyword: string = useDebounce<string>(
    searchKeyword,
    500
  );

  const [sortKey, setSortKey] = useState<string>("DATE_ASC");

  if (isError || isLoading) {
    return null;
  }

  const marketItems = mapMarketItems(
    _marketItems,
    selectedFilter,
    debouncedSearchKeyword,
    sortKey
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
        <Box
          display="grid"
          gap={2}
          sx={{
            mt: 4,
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

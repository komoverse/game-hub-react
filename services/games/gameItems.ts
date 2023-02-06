import komoverseAxiosIns from "helper/headers";
import { GAME_MARKET_COLLECTIONS, GAME_COLLECTION_ITEMS } from "helper/url";

export const getMarketCollections = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(
    `${GAME_MARKET_COLLECTIONS}/${gameId}`
  );

  return data.data;
};

export const getCollectionItems = async (collectionId: string) => {
  const { data } = await komoverseAxiosIns.get(
    `${GAME_COLLECTION_ITEMS}/${collectionId}`
  );

  return data.data;
};

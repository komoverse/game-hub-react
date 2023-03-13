import { IMarketCollection, IMarketItem } from '@/types/game/market';
import komoverseAxiosIns from 'helper/headers';
import {
  GAME_MARKET_COLLECTIONS,
  GAME_COLLECTION_ITEMS,
  GAME_DETAILS,
} from 'helper/url';

export const getMarketCollections = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(
    `${GAME_MARKET_COLLECTIONS}/${gameId}`
  );

  return data.data as IMarketCollection[];
};

export const getCollectionItems = async (collectionId: string) => {
  if (!collectionId) {
    return [];
  }
  const { data } = await komoverseAxiosIns.get(
    `${GAME_COLLECTION_ITEMS}/${collectionId}`
  );

  return data.data as IMarketItem[];
};

export const getAllGames = async () => {
  const { data } = await komoverseAxiosIns.get(GAME_DETAILS);
  return data.data;
};

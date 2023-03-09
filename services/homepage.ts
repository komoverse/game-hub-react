import komoverseAxiosIns from 'helper/headers';
import {
  FEATURED,
  HISTORY_TRANSACTION,
  MARKET_ITEM_ID,
  MARKET_RECENT,
  ME,
  PORTFOLIO,
} from 'helper/url';

export const getListFeatured = async () => {
  const { data } = await komoverseAxiosIns.get(FEATURED);
  return data.data;
};

export const getListRecent = async () => {
  const { data } = await komoverseAxiosIns.get(MARKET_RECENT);
  return data.data;
};

export const getMarketItemById = async (id: string) => {
  const { data } = await komoverseAxiosIns.get(
    MARKET_ITEM_ID.replace('{{id}}', id)
  );
  return data.data;
};

export const getMarket = async (page = 1) => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10&page=${page}`;
  const response = await fetch(URL);
  return await response.json();
};

export const getPortfolio = async () => {
  const { data } = await komoverseAxiosIns.get(PORTFOLIO);
  return data.data;
};

export const getProfile = async () => {
  const { data } = await komoverseAxiosIns.get(ME);
  return data.data;
};

export const getHistoryTransaction = async (
  listingId: string,
  page: number
) => {
  const params = `?listing_id=${listingId}&page=${page}&per_page=10`;
  const { data } = await komoverseAxiosIns.get(HISTORY_TRANSACTION + params);
  return data;
};

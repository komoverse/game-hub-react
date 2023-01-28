import komoverseAxiosIns from 'helper/headers';
import { FEATURED, MARKET_ITEM_ID, MARKET_RECENT } from 'helper/url';

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

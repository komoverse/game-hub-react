import komoverseAxiosIns from 'helper/headers';
import { FEATURED } from 'helper/url';

export const getListFeatured = async () => {
  const { data } = await komoverseAxiosIns.get(FEATURED);
  return data.data;
};

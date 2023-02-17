import komoverseAxiosIns from 'helper/headers';
import { SEARCH } from 'helper/url';
import qs from 'query-string';

export const getSearcContent = async (keyword: string) => {
  if (keyword) {
    const query = qs.stringify({ search: keyword });
    const { data } = await komoverseAxiosIns.get(`${SEARCH}?${query}`);
    return data.data;
  }
};

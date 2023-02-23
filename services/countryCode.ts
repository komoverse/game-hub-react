import komoverseAxiosIns from '@/helper/headers';
import { COUNTRY_CODE } from '@/helper/url';

export const getCountryCodeList = async (): Promise<any> => {
  const { data } = await komoverseAxiosIns.get(COUNTRY_CODE);

  return data.data;
};

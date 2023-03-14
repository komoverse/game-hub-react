import komoverseAxiosIns from '@/helper/headers';
import { OVERVIEW } from '@/helper/url';

export const getOverview = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(`${OVERVIEW}/${gameId}`);
  return data;
};

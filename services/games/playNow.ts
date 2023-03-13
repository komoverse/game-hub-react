import komoverseAxiosIns from '@/helper/headers';
import { PLAY_NOW } from '@/helper/url';

export const getPlayNow = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(`${PLAY_NOW}/${gameId}`);
  return data.data;
};

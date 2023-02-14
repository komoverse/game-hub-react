import komoverseAxiosIns from 'helper/headers';
import { MINT } from '@/helper/url';

export const getGameMint = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(MINT.replace('{{id}}', gameId));
  return data.data;
};

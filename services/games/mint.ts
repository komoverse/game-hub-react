import komoverseAxiosIns from 'helper/headers';
import { MINT, MINT_PHASE } from '@/helper/url';

export const getGameMint = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(MINT.replace('{{id}}', gameId));
  return data.data;
};

export const getGameMintPhase = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(
    MINT_PHASE.replace('{{id}}', gameId)
  );
  return data.data;
};

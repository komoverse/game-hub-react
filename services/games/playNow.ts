import komoverseAxiosIns from '@/helper/headers';
import { GAME_PLAY_NOW } from '@/helper/url';
import { IPlayNow } from '@/types/game/playNow';

export const getGamePlayableFiles = async (
  gameId: string
): Promise<IPlayNow[]> => {
  const { data } = await komoverseAxiosIns.get(`${GAME_PLAY_NOW}/${gameId}`);

  return data.data;
};

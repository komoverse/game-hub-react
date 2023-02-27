import komoverseAxiosIns from '@/helper/headers';
import { GAME_INSIGHT } from '@/helper/url';

export const getInsight = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(
    GAME_INSIGHT.replace('{{game_id}}', gameId)
  );
  return data.data;
};

import komoverseAxiosIns from '@/helper/headers';
import { MARKET_ACTIVITY } from '@/helper/url';

export const getMarketActivity = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(
    MARKET_ACTIVITY.replace('{{game_id}}', gameId)
  );
  return data.data;
};

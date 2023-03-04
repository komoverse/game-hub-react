import komoverseAxiosIns from '@/helper/headers';
import { GAME_MARKET_ACTIVITY } from '@/helper/url';
import activityData from './activity.json';
import { IMarketActivity } from '@/types/game/activity';

export const getMarketActivity = async (gameId: string) => {
  // const { data } = await komoverseAxiosIns.get(
  //   `${GAME_MARKET_ACTIVITY}/${gameId}`
  // );

  // return data.data as IMarketActivity[];

  const data = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve([] as IMarketActivity[]);
    }, 500);
  });

  return data as Promise<IMarketActivity[]>;
};

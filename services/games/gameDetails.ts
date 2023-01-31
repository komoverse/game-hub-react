import komoverseAxiosIns from "helper/headers";
import { GAME_DETAILS } from "helper/url";
import { gemaDetailsTransformer } from "./helper";

export const getGameDetails = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(`${GAME_DETAILS}/${gameId}`);

  return gemaDetailsTransformer(data);
};

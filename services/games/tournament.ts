import komoverseAxiosIns from '@/helper/headers';
import { GAME_TOURNAMENT, GAME_TOURNAMENT_LEADERBOARD } from '@/helper/url';

export const getGameTournaments = async (gameId: string): Promise<any> => {
  const { data } = await komoverseAxiosIns.get(`${GAME_TOURNAMENT}/${gameId}`);

  return data.data;
};

export const getGameTournamentLeaderboard = async (
  tournamentId: string
): Promise<any> => {
  const { data } = await komoverseAxiosIns.get(
    `${GAME_TOURNAMENT_LEADERBOARD}/${tournamentId}`
  );

  return data;
};

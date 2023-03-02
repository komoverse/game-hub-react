import komoverseAxiosIns from '@/helper/headers';
import { GAME_TOURNAMENT, GAME_TOURNAMENT_LEADERBOARD } from '@/helper/url';
import { ITournament, ITournamentResult } from '@/types/game/tournament';

export const getGameTournaments = async (gameId: string) => {
  const { data } = await komoverseAxiosIns.get(`${GAME_TOURNAMENT}/${gameId}`);

  return data.data as ITournament[];
};

export const getGameTournamentLeaderboard = async (tournamentId: string) => {
  const { data } = await komoverseAxiosIns.get(
    `${GAME_TOURNAMENT_LEADERBOARD}/${tournamentId}`
  );

  return data as ITournamentResult;
};

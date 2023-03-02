import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';

import { getGameTournamentLeaderboard } from '@/services/games/tournament';
import { COLOR } from '@/utils/globalVariable';

import SingleElimination from './SingleElimination';
import RoundRobin from './RoundRobin';
import LeaderboardTable from './LeaderboardTable';
import { TournamentContentWrapper } from '../../styles';
import {
  ITournamentLeaderboard,
  ITournamentRoundRobin,
  ITournamentSingleElimination,
} from '@/types/game/tournament';

const TournamentResult = ({
  tournamentId,
  tournamentType,
}: {
  tournamentId: string;
  tournamentType: string;
}) => {
  const {
    data: leaderboard,
    isError,
    isLoading,
  } = useQuery(['getTournamentLeaderboard', tournamentId], () =>
    getGameTournamentLeaderboard(tournamentId)
  );

  if (isLoading) {
    return (
      <TournamentContentWrapper
        sx={{
          background: COLOR.backgroundTableStriped1,
          padding: '16px',
          height: '100%',
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading...
      </TournamentContentWrapper>
    );
  }

  if (isError) {
    return (
      <TournamentContentWrapper
        sx={{
          background: COLOR.backgroundTableStriped1,
          padding: '16px',
          height: '100%',
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Cannot show data for the tournament at this time.
      </TournamentContentWrapper>
    );
  }

  return (
    <Grid container mt={1}>
      <Grid item xs={12}>
        <TournamentContentWrapper
          sx={{
            background: COLOR.backgroundTableStriped1,
            padding: '16px',
            height: '100%',
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {tournamentType === 'single_elim' && (
            <SingleElimination
              data={
                leaderboard?.tournament_result as ITournamentSingleElimination[]
              }
            />
          )}
          {tournamentType === 'round_robin' && (
            <RoundRobin
              data={leaderboard?.tournament_result as ITournamentRoundRobin}
            />
          )}
          {tournamentType === 'leaderboard' && (
            <LeaderboardTable
              data={leaderboard?.tournament_result as ITournamentLeaderboard}
            />
          )}
        </TournamentContentWrapper>
      </Grid>
    </Grid>
  );
};

export default TournamentResult;

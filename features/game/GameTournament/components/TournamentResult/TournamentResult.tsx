import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';

import { getGameTournamentLeaderboard } from '@/services/games/tournament';
import SingleElimination from './SingleElimination';

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
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>something went wrong</div>;
  }

  return (
    <Grid container mt={1}>
      <Grid item xs={12}>
        {tournamentType === 'single_elim' && (
          <SingleElimination data={leaderboard.tournament_result} />
        )}
      </Grid>
    </Grid>
  );
};

export default TournamentResult;

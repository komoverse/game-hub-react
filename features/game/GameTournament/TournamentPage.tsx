import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { COLOR } from '@/utils/globalVariable';
import { getGameTournaments } from '@/services/games/tournament';

import { TournamentContentWrapper } from './styles';
import TournamnetImage from './components/TournamentImage';
import TournamentContentHeader from './components/TournamentContentHeader';
import TournamentKeyInfo from './components/TournamentKeyInfo';
import TournamentResult from './components/TournamentResult/TournamentResult';

const TournamentPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const {
    data: tournaments,
    isError,
    isLoading,
  } = useQuery(['getTournament', gameId], () =>
    getGameTournaments(gameId as string)
  );

  // loading component with box
  if (isLoading) {
    return (
      <TournamentContentWrapper
        sx={{
          background: COLOR.backgroundTableStriped1,
          padding: '16px',
          height: '100%',
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
        }}
      >
        Something wen wrong
      </TournamentContentWrapper>
    );
  }

  return (
    <Box
      sx={{
        background: COLOR.backgroundRoot,
      }}
    >
      <Box sx={{ p: '32px' }}>
        {tournaments?.map((item, i) => (
          <Grid key={i} container spacing={3} sx={{ mt: '8px' }}>
            <TournamnetImage bannerUrl={item.image_url} />
            <Grid item xs={12} md={8}>
              <TournamentContentWrapper sx={{ padding: '32px' }}>
                <TournamentContentHeader
                  title={item.tournament_name}
                  startTime={item.start_time}
                  endTime={item.end_time}
                />
                <TournamentKeyInfo
                  startTime={item.start_time}
                  endTime={item.end_time}
                  prize={item.prize_pool}
                  description={item.description}
                />
                {item.tournament_id && (
                  <TournamentResult
                    tournamentId={item.tournament_id}
                    tournamentType={item.tournament_type}
                  />
                )}
              </TournamentContentWrapper>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default TournamentPage;

import React from 'react';
import { getOverview } from '@/services/games/overview';
import { QueryKey } from '@/types/general';
import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Items, Reviews, TopPlayers } from './Components';
import { OverviewDto } from '@/types/game';
import actionOverview from '@/store/overview/action';

const Overview = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const { isLoading } = useQuery<OverviewDto>({
    queryKey: QueryKey.OVERVIEW,
    queryFn: () => getOverview(gameId as string),
    enabled: router.pathname !== '/[game]/overview' && !!gameId,
    onSuccess: (data) => {
      actionOverview.setOverview(data);
    },
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <>
      <Items />
      <Reviews />
      <TopPlayers />
    </>
  );
};

export default React.memo(Overview);

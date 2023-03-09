import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { t } from 'i18next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid';

import { BasicTable } from '@/components/Table/BasicTable/style';
import EmptyData from '@/components/EmptyData';
import { QueryKey } from '@/types/general';
import { getMarketActivity } from '@/services/games/activity';

import { columns } from './constant';
import { IMarketActivity } from '@/types/game/activity';

const ActivityPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKey.MARKET_ACTIVITY, gameId],
    queryFn: () => getMarketActivity(gameId as string),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!gameId,
  });

  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Something went wrong
        </Typography>
      </Box>
    );
  }

  if (!data?.length) {
    return (
      <EmptyData
        title={t('game.commingSoon')}
        message={t('game.commingSoonDescription')}
      />
    );
  }

  const mapRows = (data: IMarketActivity[] | undefined) => {
    if (!data) return [];

    return data.map((item, idx) => ({
      ...item,
      id: idx,
    }));
  };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 500, textAlign: 'center', my: 2 }}
      >
        {t('game.recentSales')}
      </Typography>
      <Paper sx={{ height: '500px' }}>
        <BasicTable
          rows={mapRows(data)}
          columns={columns}
          disableSelectionOnClick
          disableColumnMenu
          disableColumnFilter
          getRowClassName={(
            params: GridRowClassNameParams<GridValidRowModel>
          ) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
          hideFooter
          disableDensitySelector
          disableColumnSelector
          disableExtendRowFullWidth
        />
      </Paper>
    </Box>
  );
};

export default ActivityPage;

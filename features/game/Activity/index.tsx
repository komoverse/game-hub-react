import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid';
import { getMarketActivity } from '@/services/games/activity';
import { QueryKey } from '@/types/general';
import { BasicTable } from '@/components/Table/BasicTable/style';
import { CircularProgress, Paper } from '@mui/material';
import { t } from 'i18next';
import { columns } from './constant';
import EmptyData from '@/components/EmptyData';

const ActivityPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const { data, isLoading } = useQuery({
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

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {data?.length < 0 ? (
        <EmptyData
          title={t('game.commingSoon')}
          message={t('game.commingSoonDescription')}
        />
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500, textAlign: 'center', my: 2 }}
          >
            {t('game.recentSales')}
          </Typography>
          <Paper sx={{ height: '500px' }}>
            <BasicTable
              rows={data.map((item: any, idx: number) => ({
                ...item,
                id: idx,
              }))}
              columns={columns}
              disableSelectionOnClick
              disableColumnMenu
              disableColumnFilter
              getRowClassName={(
                params: GridRowClassNameParams<GridValidRowModel>
              ) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
              hideFooter
              disableDensitySelector
              disableColumnSelector
              disableExtendRowFullWidth
            />
          </Paper>
        </>
      )}
    </Box>
  );
};

export default ActivityPage;

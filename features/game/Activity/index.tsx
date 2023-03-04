import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid';

import { getMarketActivity } from '@/services/games/activity';
import { QueryKey } from '@/types/general';
import { BasicTable } from '@/components/Table/BasicTable/style';
import { columns } from './constant';
import { COLOR } from '@/utils/globalVariable';

const ActivityPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKey.MARKET_ACTIVITY, gameId],
    queryFn: () => getMarketActivity(gameId as string),
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 500, textAlign: 'center' }}>
        Recent Sales
      </Typography>

      <BasicTable
        rows={data || []}
        columns={columns}
        pageSize={10}
        disableColumnSelector
        disableSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        autoHeight
        getRowClassName={(params: GridRowClassNameParams<GridValidRowModel>) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        sx={{
          marginTop: '16px',
          border: '1px solid',
          borderColor: 'divider',
          '& .MuiDataGrid-columnHeaders': {
            height: '50px',
            borderBottom: 1,
            borderColor: 'divider',
            fontSize: 14,
            background: COLOR.backgroundTableStriped1,
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 1,
            borderColor: 'divider',
            fontWeight: 500,
            fontSize: '1rem',
          },
        }}
      />
    </Box>
  );
};

export default ActivityPage;

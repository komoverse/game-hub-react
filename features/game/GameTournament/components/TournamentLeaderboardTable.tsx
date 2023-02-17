import Grid from '@mui/material/Grid';

import { BasicTable } from '@/components/Table/BasicTable/style';
import { COLOR } from '@/utils/globalVariable';
import { leaderboardColumn } from '../consts';

const TournamentLeaderboardTable = ({ rows }: { rows: any[] }) => {
  return (
    <Grid container minHeight={368} mt={1}>
      <Grid item xs={12}>
        <BasicTable
          rows={rows}
          columns={leaderboardColumn}
          pageSize={5}
          disableColumnSelector
          disableSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          autoHeight
          rowsPerPageOptions={[5]}
          sx={{
            border: '0',
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: 1,
              borderColor: 'divider',
              fontSize: 14,
              color: COLOR.baseGreen,
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 1,
              borderColor: 'divider',
              fontWeight: 500,
              fontSize: '1rem',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TournamentLeaderboardTable;

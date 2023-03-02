import { GridColDef } from '@mui/x-data-grid';

import { BasicTable } from '@/components/Table/BasicTable/style';
import { COLOR } from '@/utils/globalVariable';
import { ITournamentLeaderboard } from '@/types/game/tournament';

function generateColumns(data: Array<string>): GridColDef[] {
  if (!data) {
    return [];
  }

  return data.map((item, idx) => ({
    field: item,
    headerName: item,
    flex: 1,
    sortable: false,
    headerAlign: idx === 0 ? 'left' : 'right',
    align: idx === 0 ? 'left' : 'right',
  }));
}

const LeaderboardTable = ({ data }: { data: ITournamentLeaderboard }) => {
  const rows = data?.leaderboard_result;

  const columns = generateColumns(data?.column_leaderboard);
  return (
    <BasicTable
      rows={rows}
      columns={columns}
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
  );
};

export default LeaderboardTable;

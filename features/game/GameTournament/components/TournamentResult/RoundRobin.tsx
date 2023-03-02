import { GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

import { BasicTable } from '@/components/Table/BasicTable/style';
import { COLOR } from '@/utils/globalVariable';
import { ITournamentRoundRobin } from '@/types/game/tournament';

function getWinner(winner: string, player: string): string {
  if (winner !== 'X' && winner !== 'x') {
    if (winner === player) {
      return 'green';
    }
    return 'red';
  }

  return 'white';
}

export const roundRobinColumn: GridColDef[] = [
  { field: 'id', headerName: 'Match ID', flex: 1, sortable: false },
  { field: 'round_no', headerName: 'Round', flex: 1, sortable: false },
  { field: 'match_no', headerName: 'Match', flex: 1, sortable: false },
  {
    field: 'komo_username_A',
    headerName: 'Player 1',
    flex: 1,
    sortable: false,
    renderCell: (params) => {
      return (
        <Typography
          sx={{
            color: getWinner(params.row.match_winner, params.value),
          }}
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: 'komo_username_B',
    headerName: 'Player 2',
    flex: 1,
    sortable: false,
    renderCell: (params) => {
      return (
        <Typography
          sx={{
            color: getWinner(params.row.match_winner, params.value),
          }}
        >
          {params.value}
        </Typography>
      );
    },
  },
];

const RoundRobin = ({ data }: { data: ITournamentRoundRobin }) => {
  return (
    <BasicTable
      rows={data?.schedule}
      columns={roundRobinColumn}
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

export default RoundRobin;

import { GridColDef } from '@mui/x-data-grid';

import { BasicTable } from '@/components/Table/BasicTable/style';
import { COLOR } from '@/utils/globalVariable';
import { ITournamentRoundRobin } from '@/types/game/tournament';

export const roundRobinColumn: GridColDef[] = [
  { field: 'player', headerName: 'Player name', flex: 1, sortable: false },
  { field: 'win', headerName: 'Win', flex: 1, sortable: false },
  { field: 'lose', headerName: 'Lost', flex: 1, sortable: false },
];

function mapRows(data: ITournamentRoundRobin['standings']) {
  if (!data) return [];

  const rows = Object.keys(data).map((key) => {
    const items = {
      id: key,
      player: key,
      ...data[key],
    };
    return items;
  });

  return rows;
}

const RoundRobin = ({ data }: { data: ITournamentRoundRobin }) => {
  const playersStanding = mapRows(data?.standings);
  return (
    <BasicTable
      rows={playersStanding}
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

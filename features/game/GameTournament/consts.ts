import { GridColDef } from '@mui/x-data-grid';

export const leaderboardColumn: GridColDef[] = [
  { field: 'rank', headerName: 'Rank', width: 70, sortable: false },
  { field: 'player', headerName: 'Player', flex: 1, sortable: false },
  {
    field: 'eval',
    headerName: 'E',
    width: 160,
    sortable: false,
    headerAlign: 'right',
    align: 'right',
  },
  {
    field: 'kills',
    headerName: 'Kills',
    description: 'This column has a value getter and is not sortable.',
    width: 100,
    sortable: false,
    headerAlign: 'right',
    align: 'right',
  },
  {
    field: 'points',
    headerName: 'Points',
    width: 160,
    sortable: false,
    headerAlign: 'right',
    align: 'right',
  },
];

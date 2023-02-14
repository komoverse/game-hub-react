import { dateFromNow } from '@/helper/date';
import { COLOR } from '@/utils/globalVariable';
import { Button, Typography } from '@mui/material';
import { GridColDef, GridColumns, GridValidRowModel } from '@mui/x-data-grid';
import { ViewIcon } from '@/components/index';

export const columns: GridColumns<GridValidRowModel> = [
  {
    field: 'id',
    headerName: 'TYPE',
    minWidth: 166,
    sortable: false,
  },
  {
    field: 'symbol',
    headerName: 'SELLER',
    sortable: false,
    minWidth: 260,
  },
  {
    field: 'name',
    headerName: 'BUYER',
    sortable: false,
    minWidth: 260,
  },
  {
    field: 'market_cap_rank',
    headerName: 'PRICE',
    sortable: false,
    minWidth: 166,
  },
  {
    field: 'atl_date',
    headerName: 'TIME',
    sortable: false,
    minWidth: 166,
    renderCell: (params) => (
      <Typography sx={{ color: COLOR.baseSky }}>
        {dateFromNow(params.value)}
      </Typography>
    ),
  },
  {
    field: 'details',
    headerName: 'DETAILS',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    minWidth: 166,
    renderCell: (params) => (
      <Button
        sx={{
          border: `1px solid ${COLOR.baseGreen}`,
          textTransform: 'uppercase',
          padding: '5px 15px',
          borderRadius: 1,
        }}
        endIcon={<ViewIcon />}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '0.75rem', color: COLOR.baseGreen }}
        >
          View
        </Typography>
      </Button>
    ),
  },
];

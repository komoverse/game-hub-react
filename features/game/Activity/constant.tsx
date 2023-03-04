import Avatar from '@mui/material/Avatar';
import { GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { getDiff } from '@/helper/date';
import { COLOR } from '@/utils/globalVariable';
import Iconify from '@/components/Iconify';

async function copyToClipboard(text: string) {
  if (!navigator?.clipboard) {
    console.warn('Clipboard not supported');
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.warn('Copy failed', error);
    return false;
  }
}

export const columns: GridColDef[] = [
  {
    field: 'item_name',
    headerName: 'ITEM',
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Avatar
            variant="rounded"
            src={params.row.avatar}
            alt={`item-${params.value}`}
            style={{ width: 32, height: 32 }}
          />
          <Typography variant="body2" marginLeft={2}>
            {params.value}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: 'buyer_address',
    headerName: 'BUYER',
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const addrLength = params.value.length;
      const obscured =
        params.value.slice(0, 3) +
        params.value.slice(addrLength - 6).replace(/.(?=...)/g, '.');

      return (
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography variant="body2">{obscured}</Typography>
          <Iconify
            icon="ic:round-content-copy"
            sx={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(params.value)}
          />
        </Box>
      );
    },
  },
  {
    field: 'seller_address',
    headerName: 'SELLER',
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      const addrLength = params.value.length;
      const obscured =
        params.value.slice(0, 3) +
        params.value.slice(addrLength - 6).replace(/.(?=...)/g, '.');

      return (
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography variant="body2">{obscured}</Typography>
          <Iconify
            icon="ic:round-content-copy"
            sx={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(params.value)}
          />
        </Box>
      );
    },
  },
  {
    field: 'price',
    headerName: 'PRICE',
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => `${params.value} SOL`,
  },
  {
    field: 'created_at',
    headerName: 'TIME',
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      const now = new Date().toISOString();
      let diff = '';

      const diffInHours = getDiff(now, params.value, 'hours');

      if (diffInHours < 24) {
        diff = `${diffInHours} hours ago`;
      } else {
        const diffInDays = getDiff(now, params.value, 'days');
        diff = `${diffInDays} days ago`;
      }
      return (
        <Typography variant="body2" fontWeight={600} color={COLOR.baseGreen}>
          {diff}
        </Typography>
      );
    },
  },
];

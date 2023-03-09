import Avatar from '@mui/material/Avatar';
import { GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import isEmpty from 'lodash/isEmpty';

import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import { shortenWalletAddress } from '@/utils/shorten';

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

const styleBox = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

export const columns: GridColDef[] = [
  {
    field: 'nft_name',
    headerName: 'ITEM',
    flex: 1,
    minWidth: 300,
    sortable: false,
    renderCell: (data) => (
      <Box sx={styleBox}>
        <Avatar
          variant="rounded"
          src={data.row.nft_image_uri}
          alt={KomoverseTag}
          sx={{ height: 32, width: 32 }}
        />
        <Typography sx={{ ml: 1 }}>{data.value}</Typography>
      </Box>
    ),
  },
  {
    field: 'seller_wallet',
    headerName: 'SELLER',
    sortable: false,
    minWidth: 260,
    renderCell: (data) => (
      <Box sx={styleBox}>
        <Tooltip
          title="Copy to clipboard"
          placement="top"
          onClick={() => copyToClipboard(data.value)}
        >
          <Typography sx={{ ':hover': { textDecoration: 'underline' } }}>
            {isEmpty(data.value) ? '-' : shortenWalletAddress(data.value)}
          </Typography>
        </Tooltip>
        {!isEmpty(data.value) ? (
          <IconButton
            sx={{ ':hover': { background: 'none' } }}
            onClick={() => copyToClipboard(data.value)}
          >
            <ContentCopyIcon fontSize="small" sx={{ ml: 1 }} />
          </IconButton>
        ) : null}
      </Box>
    ),
  },
  {
    field: 'buyer_wallet',
    headerName: 'BUYER',
    sortable: false,
    minWidth: 260,
    renderCell: (data) => (
      <Box sx={styleBox}>
        <Tooltip
          title="Copy to clipboard"
          placement="top"
          onClick={() => copyToClipboard(data.value)}
        >
          <Typography sx={{ ':hover': { textDecoration: 'underline' } }}>
            {isEmpty(data.value) ? '-' : shortenWalletAddress(data.value)}
          </Typography>
        </Tooltip>
        {!isEmpty(data.value) ? (
          <IconButton
            sx={{ ':hover': { background: 'none' } }}
            onClick={() => copyToClipboard(data.value)}
          >
            <ContentCopyIcon fontSize="small" sx={{ ml: 1 }} />
          </IconButton>
        ) : null}
      </Box>
    ),
  },
  {
    field: 'price',
    headerName: 'PRICE',
    sortable: false,
    minWidth: 166,
    renderCell: (data) => <Typography>{data.value} SOL</Typography>,
  },
  {
    field: 'time_ago',
    headerName: 'TIME',
    sortable: false,
    minWidth: 190,
    renderCell: (data) => (
      <Typography sx={{ color: COLOR.baseGreen }}>{data.value}</Typography>
    ),
  },
];

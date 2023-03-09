import Avatar from '@mui/material/Avatar';
import { GridColumns, GridValidRowModel } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import { shortenWalletAddress } from '@/utils/shorten';
import { Button, IconButton, Tooltip } from '@mui/material';
import ViewIcon from '@/components/ViewIcon';
import { t } from 'i18next';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import isEmpty from 'lodash/isEmpty';

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

export const columns: GridColumns<GridValidRowModel> = [
  {
    field: 'nft_name',
    headerName: 'ITEM',
    minWidth: 300,
    sortable: false,
    renderCell: (data) => (
      <Box sx={styleBox}>
        <Avatar
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
          <IconButton sx={{ ':hover': { background: 'none' } }}>
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
          <IconButton sx={{ ':hover': { background: 'none' } }}>
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
  {
    field: 'explorer_url',
    headerName: 'DETAILS',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    minWidth: 166,
    renderCell: (data) => (
      <Button
        sx={{
          border: `1px solid ${COLOR.baseGreen}`,
          textTransform: 'uppercase',
          padding: '5px 15px',
          borderRadius: 1,
        }}
        endIcon={<ViewIcon />}
        onClick={() => window.open(data.value, '_blank')}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '0.75rem', color: COLOR.baseGreen }}
        >
          {t('button.view')}
        </Typography>
      </Button>
    ),
  },
];

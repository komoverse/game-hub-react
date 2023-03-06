import Image from 'next/image';
import { t } from 'i18next';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { GridColumns, GridValidRowModel } from '@mui/x-data-grid';

import { COLOR, GRADIENT, KomoverseTag } from '@/utils/globalVariable';

import Leaderboard1 from 'public/leaderboard-rank-1.png';
import Leaderboard2 from 'public/leaderboard-rank-2.png';
import Leaderboard3 from 'public/leaderboard-rank-3.png';
import Leaderboard4 from 'public/leaderboard-rank-4.png';

const styledRank = {
  color: COLOR.baseWhite,
  backgroundColor: COLOR.baseButtonBlack,
  textAlign: 'center',
  padding: '10px',
  width: 45,
  borderRadius: 50,
};

export const columns: GridColumns<GridValidRowModel> = [
  {
    field: 'market_cap_rank',
    renderHeader: () => (
      <Typography variant="subtitle2" sx={{ p: 1.3 }}>
        {t('table.rank')}
      </Typography>
    ),
    minWidth: 70,
    headerClassName: 'rank',
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => {
      const rank = params.row.market_cap_rank;
      let src = '';
      if (rank === 1) src = Leaderboard1.src;
      if (rank === 2) src = Leaderboard2.src;
      if (rank === 3) src = Leaderboard3.src;
      if (rank === 4) src = Leaderboard4.src;

      return (
        <>
          {rank < 5 ? (
            <Avatar sx={{ width: 60, height: 60 }} src={src} />
          ) : (
            <Box sx={styledRank}>{rank}</Box>
          )}
        </>
      );
    },
  },
  {
    field: 'player_name',
    renderHeader: () => (
      <Typography variant="subtitle2" sx={{ p: 1.3 }}>
        {t('table.playersName')}
      </Typography>
    ),
    sortable: false,
    minWidth: 250,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 35, height: 35 }} src={params.row.image} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {params.row.id}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: COLOR.baseGray }}
          >
            {params.row.symbol}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score',
    renderHeader: () => (
      <Typography variant="subtitle2" sx={{ p: 1.5 }}>
        {t('table.shareEarned')}
      </Typography>
    ),
    headerClassName: 'score',
    sortable: false,
    minWidth: 200,
    headerAlign: 'right',
    align: 'right',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/shard-icon.png" alt="shard-icon" width={45} height={30} />
        <Button
          size="small"
          sx={{
            background: GRADIENT.primary,
            color: COLOR.baseWhite,
            borderRadius: 50,
            ml: 1,
          }}
        >
          {Math.floor(params.row.atl / 100)}
        </Button>
      </Box>
    ),
  },
];

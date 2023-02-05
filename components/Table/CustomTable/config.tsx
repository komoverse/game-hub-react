import { COLOR, GRADIENT } from "@/utils/globalVariable";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { GridColumns, GridValidRowModel } from "@mui/x-data-grid"
import Leaderboard1 from 'public/leaderboard_rank1.svg'
import Leaderboard2 from 'public/leaderboard_rank2.svg'
import Leaderboard3 from 'public/leaderboard_rank3.svg'
import Leaderboard4 from 'public/leaderboard_rank4.svg'

const styledRank = {
  color: COLOR.baseWhite,
  backgroundColor: COLOR.baseButtonBlack,
  textAlign: 'center',
  padding: '10px',
  width: 45,
  borderRadius: 50
}

export const columns: GridColumns<GridValidRowModel> = [
  {
    field: 'market_cap_rank',
    headerName: 'Rank',
    minWidth: 70,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => {
      const rank = params.row.market_cap_rank
      let src = ''
      if (rank === 1) src = Leaderboard1.src
      if (rank === 2) src = Leaderboard2.src
      if (rank === 3) src = Leaderboard3.src
      if (rank === 4) src = Leaderboard4.src

      return (
        <>
          {rank < 5 ? (
            <Avatar sx={{ width: 60, height: 60 }} src={src} />
          ) : (
            <Box sx={styledRank}>
              {rank}
            </Box>
          )}
        </>
      )
    }
  },
  {
    field: 'player_name',
    headerName: 'Players Name',
    sortable: false,
    minWidth: 250,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 45, height: 45 }} src={params.row.image} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>{params.row.id}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, color: COLOR.baseGray }}>{params.row.symbol}</Typography>
        </Box>
      </Box>
    )
  },
  {
    field: 'score',
    headerName: 'KomoChess Score',
    sortable: false,
    minWidth: 200,
    headerAlign: 'right',
    align: 'right',
    renderCell: (params) => (
      <Button size="small" sx={{ background: GRADIENT.primary, color: COLOR.baseWhite, borderRadius: 50 }}>
        {Math.floor(params.row.atl / 100)}
      </Button>
    ),
  },
];

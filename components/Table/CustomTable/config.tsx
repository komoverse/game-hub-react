import { COLOR, GRADIENT } from "@/utils/globalVariable";
import { Avatar, Box, Button, Typography } from "@mui/material";
import {  GridColumns, GridValidRowModel } from "@mui/x-data-grid"

export const columns: GridColumns<GridValidRowModel> = [
  {
    field: 'rank',
    headerName: 'Rank',
    minWidth: 70,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    // renderCell: (params) => {console.log(params)}
  },
  {
    field: 'player_name',
    headerName: 'Players Name',
    sortable: false,
    minWidth: 250,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 45, height: 45 }} src={params.row.avatar_url} />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>{params.row.player_name}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, color: COLOR.baseGray }}>{params.row.game_name}</Typography>
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
        {params.value}
      </Button>
    ),
  },
];

export const data: readonly GridValidRowModel[] = [
  {
    id: 1,
    player_name: 'Bandit Komoverse',
    game_name: 'Game 1',
    rank: 1,
    score: 526,
    avatar_url: 'https://public.carv.io/games/axie_infinity/logo.webp'
  },
  {
    id: 2,
    player_name: 'Rodan Komoverse',
    game_name: 'Game 1',
    rank: 2,
    score: 540,
    avatar_url: 'https://public.carv.io/games/stepn/logo.webp'

  },
  {
    id: 3,
    player_name: 'Shi Wudu Komoverse',
    game_name: 'Game 1',
    rank: 3,
    score: 200,
    avatar_url: 'https://public.carv.io/achievements/stepn/stepn.webp'
  },
  {
    id: 4,
    player_name: 'Butcher Komoverse',
    game_name: 'Game 1',
    rank: 4,
    score: 300,
    avatar_url: 'https://public.carv.io/games/binaryx/logo.webp'
  },
  {
    id: 5,
    player_name: 'Rodan Komoverse',
    game_name: 'Game 1',
    rank: 5,
    score: 50,
    avatar_url: 'https://public.carv.io/games/second_live/logo.webp'
  },
]

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

import { COLOR, RADIUS } from "@/utils/globalVariable";
import { BasicTable } from "@/components/Table/BasicTable/style";

const rows = [
  { rank: 1, id: 1, eval: 1123443253, player: "Snow Jon", kills: 35, points: 10023 },
  {
    rank: 1,
    id: 2,
    eval: 1123443253,
    player: "Lannister Cersei",
    kills: 42,
    points: 10023,
  },
  {
    rank: 1,
    id: 3,
    eval: 1123443253,
    player: "Lannister Jaime",
    kills: 45,
    points: 10023,
  },
  { rank: 1, id: 4, eval: 1123443253, player: "Stark Arya", kills: 16, points: 10023 },
  {
    rank: 1,
    id: 5,
    eval: 1123443253,
    player: "Targaryen Daenerys",
    kills: 12,
    points: 10023,
  },
  {
    rank: 1,
    id: 6,
    eval: 1123443253,
    player: "Melisandre ull",
    kills: 15,
    points: 100230,
  },
  {
    rank: 1,
    id: 7,
    eval: 1123443253,
    player: "Clifford Ferrara",
    kills: 44,
    points: 10023,
  },
  {
    rank: 1,
    id: 8,
    eval: 1123443253,
    player: "Frances Rossini",
    kills: 36,
    points: 10023,
  },
  { rank: 1, id: 9, eval: 1123443253, player: "Roxie Harvey", kills: 65, points: 10023 },
];

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", width: 70, sortable: false },
  { field: "player", headerName: "Player", width: 320, sortable: false },
  {
    field: "eval",
    headerName: "E",
    width: 160,
    sortable: false,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "kills",
    headerName: "Kills",
    description: "This column has a value getter and is not sortable.",
    width: 100,
    sortable: false,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "points",
    headerName: "Points",
    width: 160,
    sortable: false,
    headerAlign: "right",
    align: "right",
  },
];

const Item = styled(Box)({
  borderRadius: RADIUS.medium,
  background: "#0F0F0F",
});

const VideoStyled = styled("video")({
  objectFit: "cover",
  borderRadius: RADIUS.medium,
  width: "100%",
});

const TournamentPage = () => {
  return (
    <Box sx={{ minHeight: "781px", height: "100%" }}>
      <Box sx={{ p: "32px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{}}>
            <Item>
              <VideoStyled poster="https://storage.googleapis.com/fractal-media/media_88c0c6c9-1600-4eb0-a3ea-70365d57cfe3">
                <source
                  src="https://storage.googleapis.com/fractal-media/media_ec4b4791-dc41-4ee7-886a-896d7686c327"
                  type="video/mp4"
                ></source>
              </VideoStyled>
            </Item>
          </Grid>
          <Grid item xs={12} md={8}>
            <Item sx={{ padding: "32px" }}>
              <Typography variant="h3">Community Game Night</Typography>
              <Typography variant="body1" fontWeight={500}>
                Ended
              </Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={3} sx={{}}>
                  <Item
                    sx={{
                      background: COLOR.backgroundTableStriped1,
                      padding: "16px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight={500}
                    >
                      Prize
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      $750 (~25 SOL), NFT raffles, Seed NFTs
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} md={3} sx={{}}>
                  <Item
                    sx={{
                      background: COLOR.backgroundTableStriped1,
                      padding: "16px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight={500}
                    >
                      Tournament Dates
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      November 3 at 10:00 PM — November 5 at 10:00 PM
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} md={6} sx={{}}>
                  <Item
                    sx={{
                      background: COLOR.backgroundTableStriped1,
                      padding: "16px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight={500}
                    >
                      Description
                    </Typography>
                    <Typography variant="body2" fontWeight={300}>
                      The first truly web3 tournament is here. Play for free and
                      earn SOL from each zombie kill.Queue with a team or solo.
                      The tournament ends when the $10000 prize pool is used
                      upby all players. Ends on Oct 31.
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
              <Grid container minHeight={368} mt={1}>
                <Grid item xs={12}>
                  <BasicTable
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    disableColumnSelector
                    disableSelectionOnClick
                    disableColumnFilter
                    disableColumnMenu
                    rowsPerPageOptions={[5]}
                    sx={{
                      border: "0",
                      "& .MuiDataGrid-columnHeaders": {
                        borderBottom: 1,
                        borderColor: "divider",
                        fontSize: 14,
                        color: COLOR.baseGreen,
                      },
                      "& .MuiDataGrid-cell": {
                        borderBottom: 1,
                        borderColor: "divider",
                        fontWeight: 500,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TournamentPage;

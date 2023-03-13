import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { useRouter } from 'next/router';
import Iconify from '@/components/Iconify';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import { t } from 'i18next';
import { useQuery } from 'react-query';
import { QueryKey } from '@/types/general';
import { getPlayNow } from '@/services/games';
import { GameDto, GameType } from '@/types/game';

const PlayNow = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const { data, isLoading } = useQuery<GameDto[]>({
    queryKey: QueryKey.PLAY_NOW,
    queryFn: () => getPlayNow(gameId as string),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!gameId,
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  const isGameIcon = (gameType: string) => {
    switch (gameType) {
      case GameType.WINDOWS:
        return 'ri:windows-fill';
      case GameType.WEBGL:
        return 'simple-icons:webgl';
      case GameType.GOOGLE_PLAY_STORE:
        return 'mdi:google-play';
      default:
        return '';
    }
  };

  return (
    <Box sx={{ my: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xl={5} lg={5} md={8} sm={11} xs={11}>
          <CardContent
            sx={{
              backgroundColor: COLOR.backgroundCardSemiBlack,
              borderRadius: RADIUS.medium,
            }}
          >
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                  {t('game.downloadGame', {
                    gameName: gameId?.toString().toUpperCase(),
                  })}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: 'center', fontWeight: 400 }}
                >
                  {t('game.downloadGameDescription')}
                </Typography>
              </Box>
            </Stack>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              {data?.map((game) => {
                const isGameName =
                  game.type === GameType.WINDOWS ? 'Windows' : 'Google Play';

                return (
                  <Grid item key={game.id} xl={4} lg={4} md={4} sm={11} xs={11}>
                    <CardContent
                      sx={{
                        boxShadow: 'none',
                        border: `1px solid ${COLOR.baseBorderGray}`,
                        borderRadius: RADIUS.medium,
                      }}
                    >
                      <Stack spacing={3}>
                        <Box>
                          <Iconify
                            icon={isGameIcon(game.type)}
                            width={70}
                            height={70}
                            sx={{ margin: 'auto', display: 'block' }}
                          />
                          <Typography variant="subtitle1" textAlign="center">
                            {isGameName}
                          </Typography>
                        </Box>
                        <Button
                          endIcon={<FileDownloadSharpIcon />}
                          sx={{
                            border: `1px solid ${COLOR.baseColorDownload}`,
                            color: COLOR.baseWhite,
                            textTransform: 'uppercase',
                            borderRadius: 50,
                          }}
                          onClick={() => window.open(game.value, '_blank')}
                        >
                          {t('game.download')}
                        </Button>
                      </Stack>
                    </CardContent>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayNow;

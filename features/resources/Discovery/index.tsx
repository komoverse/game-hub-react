import React from 'react';
import { COLOR, KomoverseTag, RADIUS } from '@/utils/globalVariable';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { t } from 'i18next';
import { useQuery } from 'react-query';
import { Extenstion, QueryKey } from '@/types/general';
import { getAllGames } from '@/services/games/gameItems';
import { GameListDto } from '@/types/game';
import { getExtension } from '@/utils/extension';
import { useRouter } from 'next/router';

const Discovery = () => {
  const { pathname } = useRouter();
  const { data, isLoading } = useQuery<GameListDto[]>({
    queryKey: QueryKey.GAMES,
    queryFn: () => getAllGames(),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: pathname === '/discovery',
  });

  const styleImages = {
    borderRadius: RADIUS.large,
    width: '100%',
    height: 200,
    marginBottom: '1.5rem',
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <Stack spacing={6} justifyContent="center" mt={2}>
      <Box>
        <Typography
          variant="h3"
          sx={{ fontWeight: 500, textAlign: 'center', color: COLOR.baseGreen }}
        >
          {t('game.exploreAllgames')}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500, textAlign: 'center' }}>
          {t('game.exploreGameDescription')}
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid xl={10} lg={10} md={10} sm={11} xs={11}>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {data?.map((game, idx: number) => {
              const isExtenstion = getExtension(game.hero_banner_url);

              return (
                <Grid key={idx} item xl={4} lg={4} md={6} sm={12} xs={12}>
                  <Card
                    sx={{
                      backgroundColor: COLOR.backgroundCardSemiBlack,
                      borderRadius: RADIUS.large,
                    }}
                  >
                    <CardContent>
                      {isExtenstion === Extenstion.MP4 ? (
                        <Box style={{ width: '100%', height: '100%' }}>
                          <iframe
                            frameBorder="0"
                            allow="allowfullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="Bladerite - First Look at an INCREDIBLE Melee Based Battle Royale"
                            width="100%"
                            height="100%"
                            src={game.hero_banner_url}
                            style={styleImages}
                          />
                        </Box>
                      ) : (
                        <Image
                          src={game.hero_banner_url}
                          height={100}
                          width={100}
                          alt={KomoverseTag}
                          decoding="async"
                          style={styleImages}
                          sizes="100vw"
                          priority={true}
                        />
                      )}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Stack spacing={2} direction="row">
                          <Image
                            src={game.logo_image_url}
                            height={100}
                            width={100}
                            alt={KomoverseTag}
                            decoding="async"
                            style={{
                              height: 50,
                              width: 50,
                              borderRadius: RADIUS.small,
                            }}
                            sizes="100vw"
                            priority={true}
                          />
                          <Box sx={{ ml: 2 }}>
                            <Typography variant="h6" fontWeight={500}>
                              {game.game_name}
                            </Typography>
                            <Button
                              size="small"
                              sx={{
                                backgroundColor: COLOR.backgroundTableStriped1,
                                color: '#B7B7B7',
                                fontWeight: 500,
                                lineClamp: 1,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '100%',
                              }}
                            >
                              {game.genre}
                            </Button>
                          </Box>
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, mr: 1 }}
                          >
                            {game.review_rating}
                          </Typography>
                          <Rating value={1} max={1} readOnly />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Discovery;

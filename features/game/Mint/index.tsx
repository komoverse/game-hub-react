import React from 'react';
import { COLOR, KomoverseTag, RADIUS, SectionWrapper, SectionWrapperCard } from "@/utils/globalVariable";
import { useQuery } from "react-query";
import { getGameMint } from "@/services/games";
import { useRouter } from "next/router";
import { ErrorResponseDto } from "@/types/general";
import { Button, CardContent, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { GameMintDto } from "@/types/game";
import Box from "@mui/material/Box";
import { formatDate } from "@/helper/date";
import Link from 'next/link';
import EmptyData from '@/components/EmptyData';
import { t } from 'i18next';

const Mints = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const { data } = useQuery(
    ['mints', gameId],
    () => getGameMint(gameId as string),
    {
      staleTime: 3000,
      cacheTime: 3000,
      enabled: !!gameId,
      onError: (error: ErrorResponseDto) => error,
    }
  );

  const styleCardContent = {
    backgroundColor: COLOR.backgroundCardBlack,
    borderRadius: RADIUS.large,
  };

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        {data?.length < 0 ? (
          <EmptyData
            title={t('game.commingSoon')}
            message={t('game.commingSoonDescription')}
          />
        ) : (
          data?.map((mint: GameMintDto) => (
            <Grid key={mint.id} sx={{ mt: 2 }} container spacing={2}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <Box sx={{ position: 'relative' }}>
                  <Image
                    src={mint.nft_sample_url}
                    width={100}
                    height={100}
                    alt={KomoverseTag}
                    decoding="async"
                    style={{
                      height: 'auto',
                      width: '100%',
                      visibility: 'visible',
                      borderRadius: 10,
                    }}
                    sizes="100vw"
                    loading="lazy"
                  />
                </Box>
              </Grid>
              <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h3">{mint.phase_name}</Typography>
                  <Button
                    size="small"
                    sx={{
                      textTransform: 'uppercase',
                      border: `1px solid ${COLOR.baseGreen}`,
                      ml: 2,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  >
                    Mint Now
                  </Button>
                </Box>
                {/* <Typography variant="h5" sx={{ mb: 2, color: COLOR.baseLightTextGray }}>Previous Mints</Typography> */}
                <CardContent sx={styleCardContent}>
                  <Typography variant="h4">{mint.phase_name}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Grid container>
                    <Grid item xl={4} lg={4}>
                      <Typography
                        variant="body2"
                        color={COLOR.baseSemiTextGray}
                        fontWeight={600}
                      >
                        Supply
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {mint.supply}
                      </Typography>
                    </Grid>
                    <Grid item xl={4} lg={4}>
                      <Typography
                        variant="body2"
                        color={COLOR.baseSemiTextGray}
                        fontWeight={600}
                      >
                        Mint Price
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {mint.mint_price}
                      </Typography>
                    </Grid>
                    <Grid item xl={4} lg={4}>
                      <Typography
                        variant="body2"
                        color={COLOR.baseSemiTextGray}
                        fontWeight={600}
                      >
                        Mint Schedule
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {formatDate(
                          mint.mint_start_date,
                          'DD MMMM YYYY HH:mm:ss'
                        )}{' '}
                        to{' '}
                        {formatDate(
                          mint.mint_end_date,
                          'DD MMMM YYYY HH:mm:ss'
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent sx={styleCardContent}>
                  <Typography variant="h5">Allowlist</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" fontWeight={500}>
                    {mint.allowlist}
                  </Typography>
                  <Link
                    href={mint.learn_more_url}
                    target="_blank"
                    style={{ color: COLOR.baseWhite }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                      sx={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        mt: 2,
                      }}
                    >
                      Learn more
                    </Typography>
                  </Link>
                </CardContent>
              </Grid>
            </Grid>
          ))
        )}
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Mints;

import React from 'react';
import {
  COLOR,
  KomoverseTag,
  RADIUS,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { ErrorResponseDto, QueryKey } from '@/types/general';
import {
  Button,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { formatDate } from '@/helper/date';
import EmptyData from '@/components/EmptyData';
import { t } from 'i18next';
import { getGameMintPhase } from '@/services/games/mint';
import MintGuide from './MintGuide';
import { MintPhaseDto, PhaseDto } from '@/types/game';

const Mints = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const [visibleMintGuide, setVisibleMintGuide] = React.useState(false);
  const [mintUrl, setMintUrl] = React.useState('');

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.LIST_MINT_PHASE, gameId],
    queryFn: () => getGameMintPhase(gameId as string),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!gameId,
    onError: (error: ErrorResponseDto) => error,
  });

  const mintGuide = (mintUrl: string) => {
    setVisibleMintGuide(true);
    setMintUrl(mintUrl);
  };

  const styleCardContent = {
    backgroundColor: COLOR.backgroundCardBlack,
    borderRadius: RADIUS.large,
    marginBottom: 2,
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 5 }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        {data?.length < 0 ? (
          <EmptyData
            title={t('game.commingSoon')}
            message={t('game.commingSoonDescription')}
          />
        ) : (
          data?.map((mint: MintPhaseDto, idx: number) => (
            <Grid key={idx} sx={{ mt: 2 }} container spacing={2}>
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
                  <Typography variant="h3">
                    {mint.cm_collection_title}
                  </Typography>
                  <Button
                    onClick={() => mintGuide(mint.mint_guide_url)}
                    size="small"
                    sx={{
                      textTransform: 'uppercase',
                      border: `1px solid ${COLOR.baseGreen}`,
                      ml: 2,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  >
                    {t('game.mintGuide')}
                  </Button>
                </Box>
                {/* <Typography
                  variant="h5"
                  sx={{ mb: 2, color: COLOR.baseLightTextGray }}
                >
                  {t('game.previousMint')}
                </Typography> */}
                {mint.phase.map((item: PhaseDto) => (
                  <div key={item.id}>
                    <CardContent sx={styleCardContent}>
                      <Typography variant="h4">{item.phase_name}</Typography>
                      <Divider sx={{ my: 2 }} />
                      <Grid container>
                        <Grid item xl={4} lg={4} sm={12} xs={12}>
                          <Typography
                            variant="body2"
                            color={COLOR.baseSemiTextGray}
                            fontWeight={600}
                          >
                            {t('game.supply')}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {item.supply}
                          </Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} sm={12} xs={12}>
                          <Typography
                            variant="body2"
                            color={COLOR.baseSemiTextGray}
                            fontWeight={600}
                          >
                            {t('game.mintPrice')}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {item.mint_price}
                          </Typography>
                        </Grid>
                        <Grid item xl={4} lg={4} sm={12} xs={12}>
                          <Typography
                            variant="body2"
                            color={COLOR.baseSemiTextGray}
                            fontWeight={600}
                          >
                            {t('game.mintSchedule')}
                          </Typography>
                          <Typography variant="body2" fontWeight={600}>
                            {formatDate(
                              item.mint_start_date,
                              'DD MMM YYYY HH:mm'
                            )}{' '}
                            {t('game.to')}{' '}
                            {formatDate(
                              item.mint_end_date,
                              'DD MMM YYYY HH:mm'
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ overflowX: 'scroll' }}>
                        <Typography variant="h5">
                          {t('game.allowList')}
                        </Typography>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.allowlist }}
                        />
                        <a
                          href={item.learn_more_url}
                          target="_blank"
                          style={{ color: COLOR.baseWhite }}
                          rel="noreferrer"
                        >
                          <Typography
                            variant="subtitle1"
                            fontWeight={500}
                            sx={{
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
                          >
                            {t('game.learnMore')}
                          </Typography>
                        </a>
                      </Box>
                    </CardContent>
                  </div>
                ))}
              </Grid>
            </Grid>
          ))
        )}

        <MintGuide
          open={visibleMintGuide}
          setOpen={setVisibleMintGuide}
          mintUrl={mintUrl}
        />
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Mints;

import React from 'react';
import { Box, CardContent, Grid, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shortenTitleGame } from '@/utils/shorten';
import {
  ButtonCard,
  COLOR,
  KomoverseTag,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { dateFromNow } from '@/helper/date';
import { Navigation } from 'swiper';
import Image from 'next/image';
import Solana from 'public/solana-logo.png';
import { CardImage, SectionTitle } from '@/components/index';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { IMarketItem } from '@/types/game/market';

const Overview = () => {
  const { recent_listing } = useSelector(
    (state: ReduxState) => state?.overview
  );

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <SectionTitle title={t('game.items')} />
        <Box sx={{ position: 'relative' }}>
          <Swiper
            slidesPerView="auto"
            loopedSlides={4}
            spaceBetween={10}
            preloadImages={false}
            lazy={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            allowTouchMove={false}
            className="events-swipper"
          >
            {recent_listing?.map((list: IMarketItem, idx: number) => (
              <SwiperSlide key={idx}>
                <Grid container>
                  <Grid item>
                    <CardImage image_url={list.nft.cached_image_uri}>
                      <CardContent
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 4,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                          {shortenTitleGame(list.nft.name)}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 400, color: COLOR.baseGreen }}
                        >
                          {dateFromNow(list.created_at)}
                        </Typography>
                      </CardContent>
                      <ButtonCard>
                        <Image
                          src={Solana}
                          width={15}
                          height={15}
                          alt={KomoverseTag}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, marginLeft: 1 }}
                        >
                          {list.price} {list.currency_symbol}
                        </Typography>
                      </ButtonCard>
                    </CardImage>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default React.memo(Overview);

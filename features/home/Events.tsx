import React from 'react';
import styled from '@emotion/styled';
import { Box,Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import { COLOR } from '@/utils/globalVariable';
import { useTranslation } from 'react-i18next';

const Root = styled('div')(() => ({
  backgroundColor: COLOR.backgroundRoot,
  paddingTop: '8px',
  paddingBottom: '8px',
  width: '100%',
  zIndex: 10,
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 64px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px'
  },
}))

const Events = () => {
  const { t } = useTranslation()
  const data = [
    {
      id: 1,
      image: 'https://fractal-media.imgix.net/media_14f1fce9-ba6b-4f5a-b4fa-1e5c94f6adb9?w=500&h=500&fit=crop&auto=format,compress&frame=1',
      title: 'KomoChess',
      subtitle: 'Presale Mint',
      action: 'Live'
    },
    {
      id: 2,
      image: 'https://fractal-nft.imgix.net/solana/image/31tyUsaSswJ2snF5c8F7t7B5qxNFDAmypMaSU1yFYG9v?w=3840&fit=crop&fm=webp&auto=format,compress&frame=1',
      title: 'Polygon Launch Tournament',
      subtitle: 'Event',
      action: '3 Days'
    },
    {
      id: 3,
      image: 'https://fractal-nft.imgix.net/solana/image/2cRRDAjkKgzvqsdjALqZbEoxpYLHYHY4a3Gc9VVrdVM3?w=3840&fit=crop&fm=webp&auto=format,compress&frame=1',
      title: 'Solana',
      subtitle: 'Event',
      action: '3 Days'
    }
  ]

  return (
    <Root>
      <Card>
        <Typography sx={{ marginLeft: '8px', marginBottom: '16px' }} variant='h4'>{t('home.event')}</Typography>
        <Box sx={{ position: 'relative' }}>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            preloadImages={false}
            lazy={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={breakpointsEvents}
          >
            {data.map((event) => (
              <SwiperSlide key={event.id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      data={event}
                      fontWeight={400}
                      color={COLOR.baseGray}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>
    </Root>
  )
}

export default React.memo(Events)
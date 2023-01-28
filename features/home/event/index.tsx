import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import { COLOR } from '@/utils/globalVariable';
import { useTranslation } from 'react-i18next';
import { Button, Card, Root } from './style';
import { useRouter } from 'next/router';

const Events = () => {
  const { t } = useTranslation()
  const router = useRouter();

  const data = [
    {
      created_at: '2022-09-23T08:11:39.000Z',
      image_url: 'https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreibbc6uhsplohdhxf4kclxrnynw5s5gjatattd7a4ptmidwg2xzzcq',
      status: 'SOL',
      listing_id: '8NBLTmfzz1ZPhM5bVWgtgBZapnk3F8XoqZcp2gaFVH1e',
      listing_price: 10,
      name: 'Komoverse',
      seller_address: 'AaYFExyZuMHbJHzjimKyQBAH1yfA9sKTxSzBc6Nr5X4s'
    },
    {
      created_at: '2022-09-23T08:11:39.000Z',
      image_url: 'https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreibbc6uhsplohdhxf4kclxrnynw5s5gjatattd7a4ptmidwg2xzzcq',
      listing_currency: 'SOL',
      listing_id: '8NBLTmfzz1ZPhM5bVWgtgBZapnk3F8XoqZcp2gaFVHTF',
      listing_price: 10,
      name: 'devnet',
      seller_address: 'AaYFExyZuMHbJHzjimKyQBAH1yfA9sKTxSzBc6Nr5X4s'
    },
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
            {data.map((event: any) => (
              <SwiperSlide key={event.id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      data={event}
                      fontWeight={700}
                      color={COLOR.baseSemiGray}
                      onClick={() => router.push(`/${event.name}/tournaments`)}
                    >
                      <Button>
                        <Typography variant='subtitle2' sx={{ fontWeight: 700, marginLeft: 1, color: COLOR.baseGreen }}>{event.name}</Typography>
                      </Button>
                    </CardImage>
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
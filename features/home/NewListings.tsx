import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import { COLOR } from '@/utils/globalVariable';
import ModalDetailTransaction from '@/components/ModalDetailTransaction';

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

const NewListings = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false)

  const handleOpen = () => setOpen(true)

  const data = [
    {
      id: 1,
      image: 'https://fractal-media.imgix.net/media_14f1fce9-ba6b-4f5a-b4fa-1e5c94f6adb9?w=500&h=500&fit=crop&auto=format,compress&frame=1',
      title: 'KomoChess',
      subtitle: '2 minutes ago',
      action: 'Live'
    },
    {
      id: 2,
      image: 'https://fractal-nft.imgix.net/solana/image/31tyUsaSswJ2snF5c8F7t7B5qxNFDAmypMaSU1yFYG9v?w=3840&fit=crop&fm=webp&auto=format,compress&frame=1',
      title: 'Solana',
      subtitle: '4 minutes ago',
      action: '3 Days'
    },
  ]

  return (
    <Root>
      <Card>
        <NavigationHome title={t('home.newListing')} />
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
            {data.map((list) => (
              <SwiperSlide key={list.id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      data={list}
                      fontWeight={400}
                      color={COLOR.baseGreen}
                      onClick={handleOpen}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>
      <ModalDetailTransaction
        open={open}
        setOpen={setOpen}
      />
    </Root>
  )
}

export default NewListings
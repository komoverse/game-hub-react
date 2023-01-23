import styled from '@emotion/styled';
import { Box, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardArea from '@/components/CardArea';
import { breakpointsEvents } from '@/utils/breakpoints';
import { COLOR } from '@/utils/globalVariable';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';

const Root = styled('div')(() => ({
  backgroundColor: '#000000dd',
  paddingTop: '8px',
  paddingBottom: '8px',
  width: '100%',
  zIndex: 10,
  // position: 'relative'
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 64px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 15px'
  },
}))

const BoxCard = styled('div')(() => ({
  height: 340.5,
  position: 'absolute',
  pointerEvents: 'auto',
  transform: 'none',
  zIndex: 'auto'
}))

const Button = styled('div')(() => ({
  border: '1.3px solid #232323',
  background: '#181818',
  marginTop: '12px',
  padding: '6px 8px',
  fontWeight: 700,
  color: COLOR.baseWhite,
  fontSize: '0.875rem',
  borderRadius: '7px'
}))

const NewListings = () => {
  const { t } = useTranslation();

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
        <NavigationHome title={t('home.newListing')} navigation={t('home.viewAll')} />
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
            {data.map((e) => (
              <SwiperSlide key={e.id}>
                <Grid container>
                  <Grid item>
                    <Box sx={{ height: 341, position: 'relative' }}>
                      <BoxCard>
                        <Box sx={{ width: 208.5 }}>
                          <CardActionArea sx={{ border: '1.3px solid #1E1E1E', padding: '12px', background: '#111111', borderRadius: '8px' }}>
                            <CardArea image={e.image} />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', borderRadius: 4, textAlign: 'center' }}>
                              <div>
                                <Typography variant='h6' sx={{ fontWeight: 400 }}>{e.title}</Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: 400, color: COLOR.baseGreen }}>{e.subtitle}</Typography>
                              </div>
                              <Button>{e.action}</Button>
                            </CardContent>
                          </CardActionArea>
                        </Box>
                      </BoxCard>
                    </Box>
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

export default NewListings
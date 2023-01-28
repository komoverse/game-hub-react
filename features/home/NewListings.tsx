import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import { COLOR } from '@/utils/globalVariable';
import ModalDetailTransaction from '@/components/ModalDetailTransaction';
import { useQuery } from 'react-query';
import { getListRecent } from 'services/homepage';
import { RecentDto } from 'types';

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
  const [listingId, setListingId] = React.useState<string>('')

  const { data } = useQuery('newListing', () => getListRecent(), {
    staleTime: 3000,
    refetchOnMount: false
  })

  const handleOpen = (listing_id: string) => {
    setOpen(true)
    setListingId(listing_id)
  }

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
            {data?.map((list: RecentDto) => (
              <SwiperSlide key={list.listing_id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      data={list}
                      fontWeight={400}
                      color={COLOR.baseGreen}
                      onClick={() => handleOpen(list.listing_id)}
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
        listingId={listingId}
      />
    </Root>
  )
}

export default React.memo(NewListings);
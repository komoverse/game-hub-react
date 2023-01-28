import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import ModalDetailTransaction from '@/components/ModalDetailTransaction';
import { useQuery } from 'react-query';
import { getListRecent } from 'services/homepage';
import { RecentDto } from 'types';
import { Card, Root, Button } from '../event/style';
import Solana from 'public/solana.svg'
import Image from 'next/image';
import { Typography } from '@mui/material';

const NewListings = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false)
  const [listingId, setListingId] = React.useState<string>('')

  const { data: listNft } = useQuery('newListing', () => getListRecent(), {
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
            {listNft?.map((list: RecentDto) => (
              <SwiperSlide key={list.listing_id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      data={list}
                      fontWeight={400}
                      color={COLOR.baseGreen}
                      onClick={() => handleOpen(list.listing_id)}
                      image={Solana}
                    >
                      <Button>
                        <Image src={Solana} width={15} height={15} alt={KomoverseTag} />
                        <Typography variant='subtitle2' sx={{ fontWeight: 700, marginLeft: 1 }}>{list.listing_price} {list.listing_currency}</Typography>
                      </Button>
                    </CardImage>
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
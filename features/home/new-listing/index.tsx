import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '@/components/CardImage';
import { breakpointsEvents } from '@/utils/breakpoints';
import NavigationHome from '@/components/NavigationHome';
import { useTranslation } from 'react-i18next';
import { COLOR, KomoverseTag } from '@/utils/globalVariable';
import { useQuery } from 'react-query';
import { getListRecent, getMarket, getMarketItemById } from 'services/homepage';
import { ListRecentDto} from '@/types/home';
import { Card, Root, Button } from '../event/style';
import Solana from 'public/solana.svg'
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import actionNft from '@/store/detailNft/action'
import actionTransaction from '@/store/historyTransaction/action'
import Modal from '@/components/Modal';
import { useSelector } from 'react-redux';
import { CardContent } from '@mui/material';
import { shortenTitleGame } from '@/utils/shorten';
import { dateFromNow } from '@/helper/date';
import { ReduxState } from '@/types/redux';
import { ErrorResponseDto } from '@/types/response'

const NewListings = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false)
  const [listingId, setListingId] = React.useState<string>('')
  const defaultpage = useSelector((state: ReduxState) => state.pagination)

  const { data: listNft } = useQuery('newListing', () => getListRecent(), {
    staleTime: 3000,
    refetchOnMount: false
  })

  const { isFetching } = useQuery(['marketItemById', listingId], () => getMarketItemById(listingId), {
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onError: (error: ErrorResponseDto) => error,
    onSuccess: (data) => actionNft.setDetailNft(data)
  })

  useQuery(['getMarket', defaultpage.page], () => getMarket(defaultpage.page), {
    staleTime: 3000,
    onSuccess: (data) => actionTransaction.setHistoryTransaction(data)
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
            {listNft?.map((list: ListRecentDto) => (
              <SwiperSlide key={list.listing_id}>
                <Grid container>
                  <Grid item>
                    <CardImage
                      image_url={list.image_url}
                      onClick={() => handleOpen(list.listing_id)}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >
                        <Typography variant='h6' sx={{ fontWeight: 400 }}>{shortenTitleGame(list.name)}</Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 400, color: COLOR.baseGreen }}>{dateFromNow(list.created_at)}</Typography>
                      </CardContent>
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
      
      {!isFetching && (
        <Modal
          open={open}
          setOpen={setOpen}
        />
      )}
    </Root>
  )
}

export default React.memo(NewListings);
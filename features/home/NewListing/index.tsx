import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardImage, ModalNftDetails, SectionTitle } from '@/components/index';
import { useTranslation } from 'react-i18next';
import {
  ButtonCard,
  COLOR,
  KomoverseTag,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { useQuery } from 'react-query';
import {
  getHistoryTransaction,
  getListRecent,
  getMarketItemById,
} from 'services/homepage';
import {
  HistoryTransactionDto,
  HistoryTransactionListDto,
  ListRecentDto,
} from '@/types/home';
import Solana from 'public/solana-logo.png';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import actionNft from '@/store/detailNft/action';
import { CardContent } from '@mui/material';
import { shortenTitleGame } from '@/utils/shorten';
import { dateFromNow } from '@/helper/date';
import { QueryKey } from '@/types/general';
import { Navigation } from 'swiper';
import actionToast from '@/store/toast/action';
import actionTransaction from '@/store/historyTransaction/action';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { useRouter } from 'next/router';

const NewListings = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false);
  const [listingId, setListingId] = React.useState<string>('');

  const { page } = useSelector((state: ReduxState) => state.pagination);

  const { data: listNft } = useQuery({
    queryKey: [QueryKey.LIST_MARKET_RECENT],
    queryFn: () => getListRecent(),
    staleTime: 3000,
    refetchOnMount: false,
    enabled: pathname === '/',
  });

  const { isSuccess: marketSuccess } = useQuery({
    queryKey: [QueryKey.GET_MARKET_ITEM_BY_ID, listingId],
    queryFn: () => getMarketItemById(listingId),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onError: () => {
      actionToast.setToast({
        display: true,
        message: t('utils.errorMessage'),
        type: 'error',
      });
    },
    onSuccess: (data) => actionNft.setDetailNft(data),
  });

  useQuery({
    queryKey: [QueryKey.HISTORY_TRANSACTION, listingId, page],
    queryFn: () => getHistoryTransaction(listingId, page),
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !!listingId,
    onSuccess: (data: HistoryTransactionDto) => {
      actionTransaction.setHistoryTransaction({
        data: data?.data.map(
          (item: HistoryTransactionListDto, idx: number) => ({
            ...item,
            id: idx,
          })
        ),
        pagination: data.pagination,
      });
    },
  });

  const handleOpen = (listingId: string) => {
    setOpen(true);
    setListingId(listingId);
  };

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <SectionTitle title={t('home.newListing')} />
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
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 4,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                          {shortenTitleGame(list.name)}
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
                          {list.listing_price} {list.listing_currency}
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

      {marketSuccess ? <ModalNftDetails open={open} setOpen={setOpen} /> : null}
    </SectionWrapper>
  );
};

export default React.memo(NewListings);

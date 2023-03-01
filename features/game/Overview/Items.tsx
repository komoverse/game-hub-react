import { Box, CardContent, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';
import { getListRecent } from '@/services/homepage';
import { ListRecentDto } from '@/types/home';
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
import { QueryKey } from '@/types/general';

const Overview = () => {
  const { data: listNft } = useQuery({
    queryKey: QueryKey.LIST_MARKET_RECENT,
    queryFn: () => getListRecent(),
    staleTime: 3000,
    refetchOnMount: false,
  });

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
            {listNft?.map((list: ListRecentDto) => (
              <SwiperSlide key={list.listing_id}>
                <Grid container>
                  <Grid item>
                    <CardImage image_url={list.image_url}>
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
    </SectionWrapper>
  );
};

export default Overview;

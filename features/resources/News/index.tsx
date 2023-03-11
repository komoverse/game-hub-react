import React from 'react';
import { getNews } from '@/services/resources';
import { QueryKey } from '@/types/general';
import { useQuery } from 'react-query';
import { AcademyDto, NewsDto } from '@/types/resources';
import { Box, CircularProgress, Grid, Stack } from '@mui/material';
import Layout from '@/features/resources/Layout';
import Router, { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {
  CardResources,
  MainCard,
  Title,
} from '@/features/resources/Components';
import { t } from 'i18next';
import useResponsive from '@/hooks/useResponsive';

const News = () => {
  const { pathname, locale } = useRouter();
  const smDown = useResponsive('down', 'sm');

  const { data, isLoading } = useQuery<NewsDto[]>({
    queryKey: QueryKey.NEWS,
    queryFn: () => getNews(locale as string),
    enabled: pathname === '/news',
  });

  const pinnedAcademies = React.useMemo(
    () => data?.filter((academy: NewsDto) => academy.is_pinned === 1),
    [data]
  );

  const onClickDetail = (academy: AcademyDto) => {
    Router.push(`/news/${academy.id}/${academy.slug}`);
  };

  React.useEffect(() => {
    if (pathname === '/news') {
      getNews(locale as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item xl={9} lg={9} md={10} sm={12} xs={12}>
          <Stack spacing={3}>
            <Title
              title={t('resources.news')}
              description={t('resources.newsDescription')}
            />
            {pinnedAcademies?.map((academy: NewsDto) => (
              <MainCard
                key={academy.id}
                data={academy}
                onClick={() => onClickDetail(academy)}
              />
            ))}

            <Swiper
              slidesPerView="auto"
              loopedSlides={3}
              spaceBetween={10}
              preloadImages={false}
              lazy={true}
              navigation={true}
              modules={[Navigation]}
              className={smDown ? 'academy-swiper-sm' : 'academy-swiper-lg'}
            >
              {data?.map((academy: NewsDto) => (
                <SwiperSlide key={academy.id}>
                  <Grid container>
                    <Grid item>
                      <CardResources
                        data={academy}
                        onClick={() => onClickDetail(academy)}
                      />
                    </Grid>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default News;

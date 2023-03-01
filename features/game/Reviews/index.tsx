import React from 'react';
import {
  COLOR,
  GRADIENT,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useQuery } from 'react-query';
import { getListReviews } from '@/services/games/reviews';
import { useRouter } from 'next/router';
import Ratting from './Ratting';
import ListReviews from './ListReviews';
import { ListReviewsDto } from '@/types/game';
import { EmptyData } from '@/components/index';
import actionReviews from '@/store/reviews/action';
import { LoadingButton } from '@mui/lab';
import { t } from 'i18next';
import { QueryKey } from '@/types/general';

const Reviews = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const [params, setParams] = React.useState({
    filter: 'default',
    sortBy: 'rating',
    page: 1,
  });

  const [pagination, setPagination] = React.useState({
    total_page: 0,
    total_data: 0,
  });

  const { data: reviews, isLoading } = useQuery<ListReviewsDto, ListReviewsDto>(
    {
      queryKey: [
        QueryKey.LIST_REVIEWS,
        gameId,
        params.filter,
        params.sortBy,
        params.page,
      ],
      queryFn: () =>
        getListReviews(
          gameId as string,
          params.filter as string,
          params.sortBy as string,
          params.page as number
        ),
      keepPreviousData: true,
      staleTime: 2000,
      enabled: !!gameId,
      onSuccess: (data) => {
        const { disliked_by_me, liked_by_me, reviews } = data;

        let review = reviews.data.map((review) => {
          review.like = false;
          review.dislike = false;
          return review;
        });

        if (liked_by_me !== null) {
          review = review.map((review) => {
            const likedReview = liked_by_me.find(
              (liked) => liked.game_review_id === review.id
            );
            if (likedReview) {
              review.like = likedReview.like === 1;
            }
            return review;
          });
        }

        if (disliked_by_me !== null) {
          review = review.map((review) => {
            const dislikedReview = disliked_by_me.find(
              (disliked) => disliked.game_review_id === review.id
            );
            if (dislikedReview) {
              review.dislike = dislikedReview.dislike === 1;
            }
            return review;
          });
        }

        actionReviews.setReviews(data);
        const { total_data, total_page } = data.reviews;
        setPagination({ total_data, total_page });
      },
    }
  );

  const handleSortBy = (event: SelectChangeEvent<string>) => {
    setParams({ ...params, sortBy: event.target.value as string });
  };

  const buttonFilter = [
    {
      id: 1,
      name: 'Top Player',
      background: params.filter === 'default' ? GRADIENT.primary : 'none',
      border: `1px solid ${COLOR.baseGreen}`,
      color: params.filter === 'default' ? COLOR.baseWhite : COLOR.baseGreen,
      onClick: () => setParams({ ...params, filter: 'default' }),
    },
    {
      id: 2,
      name: 'Positiv',
      background: params.filter === 'positive' ? GRADIENT.primary : 'none',
      border: `1px solid ${COLOR.baseGreen}`,
      color: params.filter === 'positive' ? COLOR.baseWhite : COLOR.baseGreen,
      onClick: () => setParams({ ...params, filter: 'positive' }),
    },
    {
      id: 3,
      name: 'Negative',
      background: params.filter === 'negative' ? GRADIENT.primary : 'none',
      border: `1px solid ${COLOR.baseGreen}`,
      color: params.filter === 'negative' ? COLOR.baseWhite : COLOR.baseGreen,
      onClick: () => setParams({ ...params, filter: 'negative' }),
    },
  ];

  if (isLoading) {
    return (
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <CircularProgress size="2rem" color="success" />
      </Box>
    );
  }

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        {reviews?.reviews.data.length === 0 ? (
          <EmptyData title="Tidak ada data" />
        ) : (
          <Grid sx={{ width: 'auto', mt: 1 }} container spacing={3}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Ratting />
            </Grid>
            <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
              {/* Filter */}
              <Grid container spacing={2} sx={{ mb: 3, alignItems: 'center' }}>
                <Grid item xs={12} sm={12} lg={3}>
                  <Typography variant="h4">
                    {t('game.playerReviews')}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={5}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {buttonFilter.map((button) => (
                      <Button
                        key={button.id}
                        size="small"
                        sx={{
                          background: button.background,
                          color: button.color,
                          width: '100%',
                          mr: 1.5,
                          border: button.border,
                        }}
                        onClick={button.onClick}
                      >
                        {button.name}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" color={COLOR.baseLightTextGray}>
                  {t('filter.sortBy')}
                </Typography>
                <FormControl variant="standard" sx={{ ml: 2 }}>
                  <Select
                    sx={{
                      minWidth: 140,
                      height: '40px',
                      color: COLOR.baseLightTextGray,
                    }}
                    value={params.sortBy}
                    onChange={handleSortBy}
                  >
                    <MenuItem value="rating">{t('game.rating')}</MenuItem>
                    <MenuItem value="created_at">
                      {t('filter.mostRecent')}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* End Filter */}

              <>
                <ListReviews />

                {pagination.total_data > pagination.total_page && (
                  <LoadingButton
                    loading={isLoading}
                    onClick={() =>
                      setParams({ ...params, page: params.page + 1 })
                    }
                    sx={{
                      background: GRADIENT.primary,
                      color: COLOR.baseWhite,
                      width: '100%',
                      textTransform: 'uppercase',
                      mt: 2,
                    }}
                  >
                    {t('button.loadMore')}
                  </LoadingButton>
                )}
              </>
            </Grid>
          </Grid>
        )}
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Reviews;

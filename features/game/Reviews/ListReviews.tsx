import React from 'react';
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Divider,
  Rating,
  Typography,
} from '@mui/material';
import { ListReviewsDto, ReviewsDto } from '@/types/game';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { ProfileDto } from '@/types/home';
import { useMutation, useQueryClient } from 'react-query';
import { disLikeReview, likeReview } from '@/services/games/reviews';
import { toast } from 'react-toastify';
import isEmpty from 'lodash/isEmpty';
import { MutationFn, QueryFn } from '@/types/general';

const ListReviews = () => {
  const queryClient = useQueryClient();
  const { reviews, profile } = useSelector((state: ReduxState) => ({
    reviews: state.reviews as ListReviewsDto,
    profile: state.profile as ProfileDto,
  }));

  const { mutate: like } = useMutation(
    [MutationFn.LIKE_REVIEW],
    (id: number) => likeReview(id as number),
    {
      onMutate: () => {
        const previousData = queryClient.getQueryData(QueryFn.LIST_REVIEWS);

        queryClient.setQueriesData(QueryFn.LIST_REVIEWS, (oldData: any) => {
          return {
            ...oldData,
            data: [oldData.reviews.data],
          };
        });
        return { previousData };
      },
      onSuccess: () => queryClient.invalidateQueries(QueryFn.LIST_REVIEWS),
      onError: (error: any) => {
        toast.error(error.response.data.messages, {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          type: 'error',
          toastId: MutationFn.LIKE_REVIEW,
        });
      },
    }
  );

  const { mutate: dislike } = useMutation(
    [MutationFn.DISLIKE_REVIEW],
    (id: number) => disLikeReview(id as number),
    {
      onMutate: () => {
        const previousData = queryClient.getQueryData(QueryFn.LIST_REVIEWS);

        queryClient.setQueriesData(QueryFn.LIST_REVIEWS, (oldData: any) => {
          return {
            ...oldData,
            data: [oldData.reviews.data],
          };
        });
        return { previousData };
      },
      onError: (error: any) => {
        toast.error(error.response.data.messages, {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          type: 'error',
          toastId: MutationFn.DISLIKE_REVIEW,
        });
      },
    }
  );

  const handleLike = (id: number) => like(id);
  const handleDisLike = (id: number) => dislike(id);

  const colorIconLikeDislike = { color: COLOR.baseWhite };

  const submitLikeDislike =
    !isEmpty(profile.komo_username) && isEmpty(reviews.reviewed_by_me);

  return (
    <>
      {reviews?.reviews?.data.map((review: ReviewsDto) => (
        <CardContent
          key={review.id}
          sx={{
            mb: 2,
            backgroundColor: COLOR.backgroundCardBlack,
            borderRadius: RADIUS.large,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={review.reviewer_picture_url}
                sx={{ marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">{review.komo_username}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating max={1} readOnly={true} value={review.rating} />
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
                <Typography variant="h4">{review.rating}</Typography>
                <Typography variant="body2" fontWeight={400}>
                  /5
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">{review.comment}</Typography>
          <Box sx={{ textAlign: 'end' }}>
            <Button
              onClick={() => submitLikeDislike && handleLike(review.id)}
              sx={{ background: COLOR.baseBackgroundButtonGray, mr: 1 }}
              size="small"
              startIcon={
                submitLikeDislike ? (
                  <ThumbUpIcon sx={colorIconLikeDislike} />
                ) : (
                  <ThumbUpOffAltIcon sx={colorIconLikeDislike} />
                )
              }
              disabled={isEmpty(profile.komo_username)}
            >
              <Typography variant="body2" color={COLOR.baseWhite}>
                {review.like_comment_count}
              </Typography>
            </Button>
            <Button
              onClick={() => submitLikeDislike && handleDisLike(review.id)}
              sx={{ background: COLOR.baseBackgroundButtonGray }}
              size="small"
              startIcon={
                submitLikeDislike ? (
                  <ThumbDownIcon sx={colorIconLikeDislike} />
                ) : (
                  <ThumbDownOffAltIcon sx={colorIconLikeDislike} />
                )
              }
              disabled={isEmpty(profile.komo_username)}
            >
              <Typography variant="body2" color={COLOR.baseWhite}>
                {review.dislike_comment_count}
              </Typography>
            </Button>
          </Box>
        </CardContent>
      ))}
    </>
  );
};

export default React.memo(ListReviews);

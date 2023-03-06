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
import isEmpty from 'lodash/isEmpty';
import { ModalTProps, MutationKey, QueryKey } from '@/types/general';
import actionModalAuth from '@/store/modalAuth/action';
import actionToast from '@/store/toast/action';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { t } from 'i18next';

const ListReviews = ({ open, setOpen }: ModalTProps) => {
  const queryClient = useQueryClient();
  const { reviews, profile } = useSelector((state: ReduxState) => ({
    reviews: state.reviews as ListReviewsDto,
    profile: state.profile as ProfileDto,
  }));

  const { mutate: like } = useMutation({
    mutationKey: MutationKey.LIKE_REVIEW,
    mutationFn: (id: number) => likeReview(id as number),
    onSuccess: () => queryClient.invalidateQueries(QueryKey.LIST_REVIEWS),
    onError: (error: any) => {
      actionToast.setToast({
        display: true,
        message: error.response.data.messages,
        type: 'error',
      });
    },
  });

  const { mutate: dislike } = useMutation({
    mutationKey: MutationKey.DISLIKE_REVIEW,
    mutationFn: (id: number) => disLikeReview(id as number),
    onSuccess: () => queryClient.invalidateQueries(QueryKey.LIST_REVIEWS),
    onError: (error: any) => {
      actionToast.setToast({
        display: true,
        message: error.response.data.messages,
        type: 'error',
      });
    },
  });

  const handleLike = (id: number) => {
    !isEmpty(profile.komo_username)
      ? like(id)
      : actionModalAuth.setModalAuth({ visible: true });
  };

  const handleDisLike = (id: number) => {
    !isEmpty(profile.komo_username)
      ? dislike(id)
      : actionModalAuth.setModalAuth({ visible: true });
  };

  const handleVisibleFormEdit = () => setOpen(true);

  const colorIconLikeDislike = { color: COLOR.baseWhite };
  const canEdit =
    !isEmpty(profile.komo_username) && !isEmpty(reviews.reviewed_by_me);

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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">{review.komo_username}</Typography>

                {canEdit && review.id === reviews.reviewed_by_me?.id && (
                  <Button
                    size="small"
                    onClick={handleVisibleFormEdit}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: 1,
                      color: COLOR.baseGreen,
                      cursor: 'pointer',
                    }}
                  >
                    <BorderColorOutlinedIcon fontSize="small" />
                    <Typography>{t('game.edit')}</Typography>
                  </Button>
                )}
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
              onClick={() => {
                if (review.like === false) {
                  handleLike(review.id);
                }
              }}
              sx={{ background: COLOR.baseBackgroundButtonGray, mr: 1 }}
              size="small"
              startIcon={
                review.like ? (
                  <ThumbUpIcon sx={colorIconLikeDislike} />
                ) : (
                  <ThumbUpOffAltIcon sx={colorIconLikeDislike} />
                )
              }
            >
              <Typography variant="body2" color={COLOR.baseWhite}>
                {review.like_count}
              </Typography>
            </Button>
            <Button
              onClick={() => {
                if (review.dislike === false) {
                  handleDisLike(review.id);
                }
              }}
              sx={{ background: COLOR.baseBackgroundButtonGray }}
              size="small"
              startIcon={
                review.dislike ? (
                  <ThumbDownIcon sx={colorIconLikeDislike} />
                ) : (
                  <ThumbDownOffAltIcon sx={colorIconLikeDislike} />
                )
              }
            >
              <Typography variant="body2" color={COLOR.baseWhite}>
                {review.dislike_count}
              </Typography>
            </Button>
          </Box>
        </CardContent>
      ))}
    </>
  );
};

export default React.memo(ListReviews);

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
import {
  ReviewButtonRattingStyle,
  ReviewRattingButton,
} from '../Overview/style';
import { ListReviewsDto, ReviewsDto } from '@/types/game';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { ProfileDto } from '@/types/home';
import { useMutation } from 'react-query';
import { likeReview } from '@/services/games/reviews';
import { toast } from 'react-toastify';
import isEmpty from 'lodash/isEmpty';

const ListReviews = ({ getListReviewsFn }: any) => {
  const { reviews, profile } = useSelector((state: ReduxState) => ({
    reviews: state.reviews as ListReviewsDto,
    profile: state.profile as ProfileDto,
  }));

  const { mutate } = useMutation(
    ['like'],
    (id: number) => likeReview(id as number),
    {
      onSuccess: () => getListReviewsFn(),
      onError: () => {
        getListReviewsFn();
        toast.error('Terjadi Kesalahan, silahkan coba kembali', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          type: 'error',
          toastId: 'like',
        });
      },
    }
  );

  const handleLike = (id: number) => mutate(id);
  const handleDisLike = (id: number) => mutate(id);

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
                <ReviewRattingButton size="small">
                  <Rating max={1} value={1} size="small" readOnly={true} />
                  <Typography sx={ReviewButtonRattingStyle}>
                    Top Player
                  </Typography>
                </ReviewRattingButton>
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
              onClick={() => handleLike(review.id)}
              sx={{ background: COLOR.baseBackgroundButtonGray, mr: 1 }}
              size="small"
              startIcon={<ThumbUpIcon sx={{ color: COLOR.baseWhite }} />}
              disabled={isEmpty(profile.komo_username)}
            >
              <Typography variant="body2" color={COLOR.baseWhite}>
                {review.like_comment_count}
              </Typography>
            </Button>
            <Button
              onClick={() => handleDisLike(review.id)}
              sx={{ background: COLOR.baseBackgroundButtonGray }}
              size="small"
              startIcon={<ThumbDownIcon sx={{ color: COLOR.baseWhite }} />}
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

import React from 'react';
import {
  Avatar,
  Box,
  LinearProgressProps,
  Rating,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import {
  ReviewButtonRattingStyle,
  ReviewRattingButton,
} from '../Overview/style';
import StarIcon from '@mui/icons-material/Star';
import { Iconify } from '@/components/index';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import { ListReviewsDto, ReviewFormDto } from '@/types/game';
import { useMutation } from 'react-query';
import { submitReview } from '@/services/games/reviews';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { isEmpty } from 'lodash';
import { ProfileDto } from '@/types/home';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import { t } from 'i18next';
import { BorderLinearProgress, OveralRatting } from './style';

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 1,
      }}
    >
      <Box sx={{ minWidth: 15, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" fontWeight={500}>
          {props.value}
        </Typography>
        <Rating
          max={1}
          sx={{ ml: 1 }}
          emptyIcon={<StarIcon fontSize="inherit" />}
        />
      </Box>
      <Box sx={{ width: '70%', ml: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={(props.value / 5) * 100}
        />
      </Box>
    </Box>
  );
};

const Ratting = ({ getListReviewsFn }: any) => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const [state, setState] = React.useState<ReviewFormDto>({
    rating: 0,
    comment: '',
  });

  const { profile, reviews } = useSelector((state: ReduxState) => ({
    profile: state.profile as ProfileDto,
    reviews: state.reviews as ListReviewsDto,
  }));

  const { mutate, isLoading } = useMutation(
    'submit-review',
    (data: ReviewFormDto) => submitReview(gameId as string, data),
    {
      onSuccess: () => {
        getListReviewsFn();
        setState({ rating: 0, comment: '' });
      },
      onError: () => {
        toast.error('Terjadi Kesalahan, silahkan', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          type: 'error',
          toastId: 'submit-review',
        });
      },
    }
  );

  const onSubmit = (data: ReviewFormDto) => mutate(data);

  const progress = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const sortingDescProgress = progress.sort((a, b) => b.value - a.value);

  return (
    <OveralRatting>
      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.overallRating')}
        </Typography>
        <Typography variant="h1">
          {reviews?.summary?.overall_rating.toFixed(1)}
        </Typography>
        <Rating
          sx={{ justifyContent: 'center' }}
          size="medium"
          value={Math.round(reviews?.summary?.overall_rating)}
          readOnly={true}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Iconify
            icon={'heroicons-solid:chat-alt-2'}
            color={COLOR.baseWhite}
            width={25}
            height={25}
          />
          <Typography variant="subtitle2" fontWeight={500} marginLeft={1}>
            {t('game.review', { count: reviews.summary?.total_reviews })}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.reviewSummary')}
        </Typography>
        {sortingDescProgress.map((item) => {
          return <LinearProgressWithLabel key={item.id} value={item.value} />;
        })}
      </Box>

      {!isEmpty(profile.komo_username) ? (
        <Box
          sx={{
            p: 2,
            backgroundColor: COLOR.baseBackgroundReview,
            borderRadius: 3,
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={profile?.profile_picture_url!}
              sx={{ marginRight: 2 }}
            />
            <Box sx={{ textAlign: 'start' }}>
              <Typography variant="h6" fontWeight={600}>
                {profile?.komo_username}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ my: 2 }}>
            <Rating
              onChange={(e, value) => setState({ ...state, rating: value! })}
              sx={{ justifyContent: 'center' }}
              value={state.rating}
              size="large"
              max={5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
          <Box>
            <TextareaAutosize
              onChange={(e) => setState({ ...state, comment: e.target.value })}
              minRows={4}
              value={state.comment}
              placeholder="Add your review here..."
              style={{
                width: '100%',
                borderRadius: 12,
                padding: 10,
              }}
            />
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <LoadingButton
              onClick={() => onSubmit(state)}
              disabled={state.rating === 0}
              size="small"
              loading={isLoading}
              sx={{
                background: state.rating !== 0 ? GRADIENT.primary : 'none',
                color: COLOR.baseWhite,
                mt: 1,
              }}
            >
              Publish
            </LoadingButton>
          </Box>
        </Box>
      ) : null}
    </OveralRatting>
  );
};

export default React.memo(Ratting);

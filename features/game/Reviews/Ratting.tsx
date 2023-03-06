import React from 'react';
import {
  Avatar,
  Box,
  Button,
  LinearProgressProps,
  Rating,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Iconify } from '@/components/index';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import { ListReviewsDto, RatingSummaryDto, ReviewFormDto } from '@/types/game';
import { useMutation, useQueryClient } from 'react-query';
import { submitReview, updateReview } from '@/services/games/reviews';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import isEmpty from 'lodash/isEmpty';
import { ProfileDto } from '@/types/home';
import { LoadingButton } from '@mui/lab';
import { t } from 'i18next';
import { BorderLinearProgress, OveralRatting } from './style';
import { ModalTProps, MutationKey, QueryKey } from '@/types/general';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import actionToast from '@/store/toast/action';

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: RatingSummaryDto }
) => (
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
        {props.value.total_rating}
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
        value={(props.value.rating / 5) * 100}
      />
    </Box>
  </Box>
);

const Ratting = ({ open, setOpen }: ModalTProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { game: gameId } = router.query;

  const { profile, reviews } = useSelector((state: ReduxState) => ({
    profile: state.profile as ProfileDto,
    reviews: state.reviews as ListReviewsDto,
  }));

  const [state, setState] = React.useState<ReviewFormDto>({
    rating: 0,
    comment: '',
  });
  const [message, setMessage] = React.useState<string>(`${t('game.reviewed')}`);

  const { mutate: addReview, isLoading: loadingAdd } = useMutation({
    mutationKey: MutationKey.SUBMIT_REVIEW,
    mutationFn: (data: ReviewFormDto) => submitReview(gameId as string, data),
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKey.LIST_REVIEWS);
      setState({ rating: 0, comment: '' });
      setMessage(`${t('game.reviewed')}`);
      setOpen(false);
    },
    onError: (error: any) =>
      actionToast.setToast({
        display: true,
        message: error.response.data.messages,
        type: 'error',
      }),
  });

  const { mutate: editReview, isLoading: loadingEdit } = useMutation({
    mutationKey: MutationKey.EDIT_REVIEW,
    mutationFn: ({ data, id }: { data: ReviewFormDto; id: number }) => {
      return updateReview(data, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKey.LIST_REVIEWS);
      setState({ rating: 0, comment: '' });
      setMessage(`${t('game.updateReviewed')}`);
      setOpen(false);
    },
    onError: (error: any) =>
      actionToast.setToast({
        display: true,
        message: error.response.data.messages,
        type: 'error',
      }),
  });

  const onCreate = (data: ReviewFormDto) => addReview(data);
  const onUpdate = (data: ReviewFormDto, id: number) =>
    editReview({ data, id });

  const onSubmit = () => {
    if (open === true) {
      onUpdate(state, reviews.reviewed_by_me?.id as number);
    } else {
      onCreate(state);
    }
  };

  const handleLoading = () => {
    if (open === true) {
      return loadingEdit;
    } else {
      return loadingAdd;
    }
  };

  const canReview =
    !isEmpty(profile.komo_username) && isEmpty(reviews.reviewed_by_me);
  const isValidReviewed = !isEmpty(reviews.reviewed_by_me);

  const sortingRating = reviews.rating_summary?.sort(
    (a, b) => b.rating - a.rating
  );

  const handleVisibleFormEdit = () => setOpen(false);

  React.useEffect(() => {
    const { reviewed_by_me } = reviews;
    if (open && reviewed_by_me) {
      const { rating, comment } = reviewed_by_me;
      setState({ rating, comment });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.reviewed_by_me, open]);

  return (
    <OveralRatting>
      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.overallRating')}
        </Typography>
        <Typography variant="h1">
          {reviews.overall_summary?.overall_rating.toFixed(1)}
        </Typography>
        <Rating
          sx={{ justifyContent: 'center' }}
          size="medium"
          value={Math.round(reviews?.overall_summary?.overall_rating)}
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
            {t('game.review', {
              count: reviews.overall_summary?.total_reviews,
            })}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.reviewSummary')}
        </Typography>
        {sortingRating?.map((item: any, idx: number) => {
          return <LinearProgressWithLabel key={idx} value={item} />;
        })}
      </Box>

      {canReview || open === true ? (
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
              value={state.rating || reviews.reviewed_by_me?.rating}
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
              value={state.comment || reviews.reviewed_by_me?.comment}
              placeholder="Add your review here..."
              style={{
                width: '100%',
                borderRadius: 12,
                padding: 10,
              }}
            />
          </Box>
          <Box
            sx={{
              justifyContent: 'end',
              display: 'flex',
              alignItems: 'center',
              mt: 1,
            }}
          >
            {open === true && (
              <Button
                variant="outlined"
                size="small"
                onClick={handleVisibleFormEdit}
              >
                {t('button.cancel')}
              </Button>
            )}
            <LoadingButton
              onClick={onSubmit}
              disabled={state.rating === 0}
              size="small"
              loading={handleLoading()}
              sx={{
                background: state.rating !== 0 ? GRADIENT.primary : 'none',
                color: COLOR.baseWhite,
                ml: 1,
              }}
            >
              {t('button.publish')}
            </LoadingButton>
          </Box>
        </Box>
      ) : isValidReviewed ? (
        <Box sx={{ mt: 2 }}>
          <CheckCircleRoundedIcon
            sx={{ color: COLOR.baseGreen }}
            fontSize="large"
          />
          <Typography variant="h5" fontWeight={500}>
            {message}
          </Typography>
        </Box>
      ) : null}
    </OveralRatting>
  );
};

export default React.memo(Ratting);

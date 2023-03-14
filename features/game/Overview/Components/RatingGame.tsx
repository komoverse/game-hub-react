import { Box, Typography, Rating, LinearProgressProps } from '@mui/material';
import React from 'react';
import { OveralRatting } from '../style';
import StarIcon from '@mui/icons-material/Star';
import Iconify from '@/components/Iconify';
import { COLOR } from '@/utils/globalVariable';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { BorderLinearProgress } from '../../Reviews/style';
import { RatingSummaryDto } from '@/types/game';

const RatingGame = () => {
  const { review } = useSelector((state: ReduxState) => state.overview);

  const sortingRating = review.rating_summary?.sort(
    (a, b) => b.rating - a.rating
  );

  return (
    <OveralRatting>
      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.overallRating')}
        </Typography>
        <Typography variant="h1">
          {review.overall_summary?.overall_rating.toFixed(1)}
        </Typography>
        <Rating
          sx={{ justifyContent: 'center' }}
          size="medium"
          value={Math.round(review?.overall_summary?.overall_rating)}
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
              count: review.overall_summary?.total_reviews,
            })}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={500}>
          {t('game.reviewSummary')}
        </Typography>
        {sortingRating?.map((item: any, idx: number) => {
          return <MemoizedLinearProgressWithLabel key={idx} value={item} />;
        })}
      </Box>
    </OveralRatting>
  );
};

export default React.memo(RatingGame);

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

const MemoizedLinearProgressWithLabel = React.memo(LinearProgressWithLabel);

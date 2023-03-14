import useResponsive from '@/hooks/useResponsive';
import { ReduxState } from '@/types/redux';
import { COLOR, FONTSIZE, FONTWEIGHT } from '@/utils/globalVariable';
import { shortedDescription } from '@/utils/shorten';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { BoxReview, ReviewCard, ReviewRattingButton } from '../style';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const ReviewsGame = () => {
  const lgUp = useResponsive('up', 'lg');
  const { review } = useSelector((state: ReduxState) => state.overview);

  const dataReview = review.reviews.data.slice(0, 6);

  return (
    <Grid sx={{ width: 'auto' }} container spacing={3}>
      {dataReview.map((item) => (
        <Grid key={item.id} item lg={4} md={6} sm={12} xs={12}>
          <ReviewCard>
            <>
              <BoxReview>
                <Stack direction="row" alignItems="center">
                  <Avatar
                    src={item.reviewer_picture_url}
                    sx={{ marginRight: 2 }}
                  />
                  <Stack direction="column">
                    <Typography variant="subtitle1" fontWeight={500}>
                      {item.komo_username}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Stack direction="row" alignItems="center">
                        <ThumbUpOffAltIcon fontSize="small" />
                        <Typography
                          variant="body1"
                          color={COLOR.baseWhite}
                          ml={1}
                        >
                          {item.like_count}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center">
                        <ThumbDownOffAltIcon fontSize="small" />
                        <Typography
                          variant="body1"
                          color={COLOR.baseWhite}
                          ml={1}
                        >
                          {item.dislike_count}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <Button size="small">
                    <Rating max={1} value={1} readOnly={true} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: FONTSIZE.medium,
                        color: COLOR.baseWhite,
                        ml: 0.5,
                        fontWeight: 400,
                      }}
                    >
                      {item.rating}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: FONTSIZE.medium,
                        color: COLOR.baseTextGray,
                        ml: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      /5
                    </Typography>
                  </Button>
                </Stack>
              </BoxReview>
              <Divider sx={{ my: 3 }} />
            </>

            <Typography
              fontWeight={FONTWEIGHT.regular}
              variant="subtitle2"
              sx={{ marginTop: 2, textAlign: 'justify' }}
            >
              {lgUp
                ? shortedDescription(item.comment, 200)
                : shortedDescription(item.comment, 100)}
            </Typography>
          </ReviewCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(ReviewsGame);

import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { Grid } from '../style';
import {
  COLOR,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { SectionTitle } from '@/components/index';
import ReviewsGame from './ReviewsGame';
import RatingGame from './RatingGame';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

const Reviews = () => {
  const { query, push } = useRouter();

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SectionTitle title={t('game.reviews')} />
          <Button
            onClick={() => push(`${query.game}/review`)}
            endIcon={
              <ArrowForwardIcon
                fontSize="small"
                sx={{ color: COLOR.baseColorDownload }}
              />
            }
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 500,
                color: COLOR.baseColorDownload,
                mr: 1,
              }}
            >
              {t('button.viewAll')}
            </Typography>
          </Button>
        </Stack>
        <Box>
          <Grid sx={{ width: 'auto' }} container spacing={3}>
            <Grid item lg={3} md={4}>
              <RatingGame />
            </Grid>
            <Grid item lg={9} md={8}>
              <ReviewsGame />
            </Grid>
          </Grid>
        </Box>
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default React.memo(Reviews);

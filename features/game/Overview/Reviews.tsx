import {
  Avatar,
  Box,
  Button,
  Divider,
  Rating,
  Typography,
} from '@mui/material';
import { t } from 'i18next';
import {
  OveralRatting,
  ReviewCard,
  BoxReview,
  ReviewRattingButton,
  ReviewButtonRattingStyle,
  ReviewSubRattingStyle,
  Grid,
} from './style';
import {
  COLOR,
  FONTSIZE,
  FONTWEIGHT,
  GRADIENT,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import StarIcon from '@mui/icons-material/Star';
import { Iconify, SectionTitle } from '@/components/index';
import { shortedDescription } from '@/utils/shorten';
import useResponsive from '@/hooks/useResponsive';

const Reviews = () => {
  const lgUp = useResponsive('up', 'lg');
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <SectionTitle title={t('game.reviews')} />
        <Box>
          <Grid sx={{ width: 'auto' }} container spacing={3}>
            <Grid item lg={3} md={4}>
              <OveralRatting>
                <Typography variant="subtitle1" fontWeight={500}>
                  Overall Rating
                </Typography>
                <Typography variant="h1">4.0</Typography>
                <Rating
                  sx={{ justifyContent: 'center' }}
                  readOnly={true}
                  max={5}
                  value={2}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Iconify
                    icon={'heroicons-solid:chat-alt-2'}
                    color={COLOR.baseWhite}
                    width={25}
                    height={25}
                  />
                  <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    marginLeft={1}
                  >
                    1000 Review
                  </Typography>
                </Box>
                <Grid sx={{ p: 0 }} container>
                  <Grid item xs>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      4.0
                    </Typography>
                    <Typography sx={ReviewSubRattingStyle}>
                      Fun to play
                    </Typography>
                  </Grid>
                  <Divider light={true} flexItem orientation="vertical" />
                  <Grid item xs>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      4.0
                    </Typography>
                    <Typography sx={ReviewSubRattingStyle}>
                      Fun to play
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    borderRadius: 5,
                    marginTop: 2.5,
                    textAlign: 'center',
                    background: GRADIENT.primary,
                  }}
                >
                  <Button
                    startIcon={
                      <Iconify
                        icon={'material-symbols:edit-square-outline-rounded'}
                        color={COLOR.baseWhite}
                        width={15}
                        height={15}
                      />
                    }
                    sx={{ color: COLOR.baseWhite }}
                    size="small"
                  >
                    Add Your Review
                  </Button>
                </Box>
              </OveralRatting>
            </Grid>
            <Grid item lg={9} md={8}>
              <Grid sx={{ width: 'auto' }} container spacing={3}>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <ReviewCard>
                    {lgUp ? (
                      <>
                        <BoxReview>
                          <Avatar
                            src="https://fractal-media.imgix.net/media_f4ad9784-6589-41b9-afdb-5c367d8a8eb6?w=500&h=500&fit=crop&auto=format,compress&frame=1"
                            sx={{ marginRight: 2 }}
                          />
                          <Box>
                            <Typography variant="subtitle1" fontWeight={500}>
                              Bandit Komoverse
                            </Typography>
                            <ReviewRattingButton size="small">
                              <Rating
                                max={1}
                                value={1}
                                size="small"
                                readOnly={true}
                              />
                              <Typography sx={ReviewButtonRattingStyle}>
                                Top Player
                              </Typography>
                            </ReviewRattingButton>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating max={1} value={1} readOnly={true} />
                            <Typography
                              sx={{
                                fontSize: FONTSIZE.medium,
                                color: COLOR.baseTextGray,
                                ml: 0.5,
                              }}
                            >
                              4.5
                            </Typography>
                          </Box>
                        </BoxReview>
                        <Divider sx={{ my: 4 }} />
                      </>
                    ) : (
                      <>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            src="https://fractal-media.imgix.net/media_f4ad9784-6589-41b9-afdb-5c367d8a8eb6?w=500&h=500&fit=crop&auto=format,compress&frame=1"
                            sx={{ marginRight: 2 }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              fontWeight={500}
                              marginBottom={0.5}
                            >
                              Bandit Komoverse
                            </Typography>
                            <ReviewRattingButton size="small">
                              <Rating
                                max={1}
                                value={1}
                                size="small"
                                readOnly={true}
                              />
                              <Typography sx={ReviewButtonRattingStyle}>
                                Top Player
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: FONTSIZE.medium,
                                  color: COLOR.baseWhite,
                                  ml: 2,
                                }}
                              >
                                4.5
                              </Typography>
                            </ReviewRattingButton>
                          </Box>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                      </>
                    )}

                    <Typography
                      fontWeight={FONTWEIGHT.regular}
                      variant="subtitle2"
                      sx={{ marginTop: 2, textAlign: 'justify' }}
                    >
                      {lgUp
                        ? shortedDescription(text, 200)
                        : shortedDescription(text, 100)}
                    </Typography>
                  </ReviewCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Reviews;

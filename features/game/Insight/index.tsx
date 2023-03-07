import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  COLOR,
  RADIUS,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { t } from 'i18next';
import {
  Box,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useQuery } from 'react-query';
import { QueryKey, Socmed } from '@/types/general';
import { getInsight } from '@/services/games/insight';
import { useRouter } from 'next/router';
import { InsightDto } from '@/types/game';
import actionToast from '@/store/toast/action';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { formatFollowerCount } from '@/utils/formatter';
import PieChart from './PieChart';
import AreaChart from './AreaChart';

const Insight = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const { data, isLoading } = useQuery<InsightDto | null>({
    queryKey: QueryKey.GAME_INSIGHT,
    queryFn: () => getInsight(gameId as string),
    enabled: !!gameId,
    onSuccess: (data: InsightDto | null) => data,
    onError: (error: any) => {
      actionToast.setToast({
        display: true,
        message: error.response.data.messages,
        type: 'error',
      });
    },
  });

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
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <SectionTitle title={t('game.social')} />
            <Stack spacing={2}>
              <CardContent
                sx={{
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
                  <Typography variant="body1">Twitter Followers</Typography>
                  <TwitterIcon />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h4">
                  {formatFollowerCount(data?.data.twitter_followers!)}
                </Typography>
              </CardContent>

              <AreaChart data={data?.graph.twitter} source={Socmed.TWITTER} />
              <PieChart data={data?.data} source={Socmed.DISCORD} />
              <AreaChart data={data?.graph.discord} source={Socmed.DISCORD} />
              <PieChart data={data?.data} source={Socmed.TELEGRAM} />
              <AreaChart data={data?.graph.telegram} source={Socmed.TELEGRAM} />
            </Stack>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <SectionTitle title={t('game.tweets')} />
            <CardContent
              sx={{
                backgroundColor: COLOR.backgroundRoot,
                border: `2px solid ${COLOR.backgroundCardSemiBlack}`,
                borderRadius: RADIUS.large,
              }}
            >
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="komoverse"
                options={{ height: '1000px' }}
                theme="dark"
                noBorders
              />
            </CardContent>
          </Grid>
        </Grid>
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Insight;

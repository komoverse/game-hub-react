import React from 'react';
import {
  COLOR,
  RADIUS,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { t } from 'i18next';
import { CustomTable, SectionTitle } from '@/components/index';
import { CardContent, Grid } from '@mui/material';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';

const TopPlayers = () => {
  const { top_player } = useSelector((state: ReduxState) => state?.overview);
  const dataEarners = top_player?.map((item, idx) => ({
    ...item,
    id: idx + 1,
  }));

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <SectionTitle title={t('game.topPlayers')} />
            <CardContent
              sx={{
                backgroundColor: COLOR.backgroundCardBlack,
                border: `2.5px solid ${COLOR.baseCardBlack}`,
                borderRadius: RADIUS.large,
              }}
            >
              <CustomTable data={dataEarners} />
            </CardContent>
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
                options={{ height: '700px' }}
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

export default React.memo(TopPlayers);

import React from 'react'
import { COLOR, RADIUS, SectionWrapper, SectionWrapperCard } from '@/utils/globalVariable'
import { t } from "i18next";
import { CustomTable, SectionTitle } from '@/components/index';
import { CardContent, Grid } from '@mui/material';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TopPlayers = () => {

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <SectionTitle title={t('game.topPlayers')} />
            <CardContent sx={{ backgroundColor: COLOR.backgroundCardBlack, border: `2.5px solid ${COLOR.baseCardBlack}`, borderRadius: RADIUS.large }}>
              <CustomTable />
            </CardContent>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} md={6}>
            <SectionTitle title={t('game.tweets')} />
            <CardContent sx={{ backgroundColor: '#000000', border: '2px solid #111111', borderRadius: RADIUS.large }}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="komoverse"
                options={{ height: '500px' }}
                theme="dark"
                noBorders
              />
            </CardContent>
          </Grid>
        </Grid>
      </SectionWrapperCard>
    </SectionWrapper>
  )
}

export default TopPlayers
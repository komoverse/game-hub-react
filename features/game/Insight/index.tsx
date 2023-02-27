import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  COLOR,
  RADIUS,
  SectionWrapper,
  SectionWrapperCard,
} from '@/utils/globalVariable';
import { t } from 'i18next';
import { Box, CardContent, Divider, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useQuery } from 'react-query';
import { QueryKey } from '@/types/general';
import { getInsight } from '@/services/games/insight';
import { useRouter } from 'next/router';
import { InsightDto } from '@/types/game';
import Cookies from 'js-cookie';

const Insight = () => {
  const router = useRouter();
  const { game: gameId } = router.query;

  const { data } = useQuery<InsightDto | null>({
    queryKey: QueryKey.GAME_INSIGHT,
    queryFn: () => getInsight(gameId as string),
    enabled: !!gameId,
    onSuccess: (data: InsightDto | null) => data,
  });

  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <SectionTitle title={t('game.social')} />
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
          <Typography variant="h4">30k</Typography>
        </CardContent>
      </SectionWrapperCard>
    </SectionWrapper>
  );
};

export default Insight;

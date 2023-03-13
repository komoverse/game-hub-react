import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { t } from 'i18next';

import { getGamePlayableFiles } from '@/services/games/playNow';
import { QueryKey } from '@/types/general';
import Iconify from '@/components/Iconify';
import { IPlayNow } from '@/types/game/playNow';
import { CircularProgress } from '@mui/material';

function generateDownloadThumbnail(data: IPlayNow) {
  const { type } = data;
  const lable = {
    icon: 'mdi:windows',
    label: 'Windows',
  };
  switch (true) {
    case type.includes('mac'):
      return {
        icon: 'mdi:apple',
        label: 'MacOs',
      };
    case type.includes('linux'):
      return {
        icon: 'mdi:linux',
        label: 'Linux',
      };
    case type.includes('android'):
      return {
        icon: 'mdi:android',
        label: 'Android',
      };
    case type.includes('app_store'):
      return {
        icon: 'mdi:apple',
        label: 'App Store',
      };
    case type.includes('google_play'):
      return {
        icon: 'mdi:google-play',
        label: 'Google Play',
      };
    case type.includes('xbox'):
      return {
        icon: 'mdi:xbox',
        label: 'Xbox',
      };
    case type.includes('playstation'):
      return {
        icon: 'mdi:playstation',
        label: 'Playstation',
      };
    case type.includes('nintendo'):
      return {
        icon: 'mdi:nintendo-switch',
        label: 'Nintendo',
      };
    default:
      return lable;
  }
}

const PlayNowPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKey.PLAY_NOW, gameId],
    queryFn: () => getGamePlayableFiles(gameId as string),
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const mappedData = data?.map((item) => ({
    ...item,
    ...generateDownloadThumbnail(item),
  }));

  return (
    <Container sx={{ margin: '64px auto' }} maxWidth="sm">
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3">
            {t('game.downloadGame', {
              gameName: gameId?.toString().toUpperCase(),
            })}
          </Typography>
          <Typography variant="h5" fontWeight={400}>
            {t('game.downloadGameDescription')}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '4rem',
            gap: '24px',
          }}
        >
          {mappedData?.map((item, i) => (
            <Box
              key={i}
              sx={{
                border: '1px solid #2E2E2E',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <Iconify icon={item.icon} height={64} width={64} />
              <Typography variant="h6">{item.label}</Typography>
              <Button
                variant="outlined"
                sx={{
                  marginTop: '12px',
                  border: '1px solid #CFCFCF',
                  borderRadius: '20px',
                  color: '#CFCFCF',

                  '&:hover': {
                    border: '1px solid #CFCFCF',
                    color: '#CFCFCF',
                    backgroundColor: '#2E2E2E',
                  },
                }}
                endIcon={<Iconify icon="ic:twotone-download-for-offline" />}
                onClick={() => window.open(item.value, '_blank')}
              >
                {t('game.download')}
              </Button>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default PlayNowPage;

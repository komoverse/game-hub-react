import React from 'react';
import { COLOR, GRADIENT, KomoverseTag } from '@/utils/globalVariable';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { t } from 'i18next';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Iconify from '@/components/Iconify';
import { useMutation } from 'react-query';
import Router from 'next/router';
import { loginSocmed } from '@/services/auth';
import Logo from 'public/logo.svg';
import { Provider } from '@/types/general';

const KomoWallets = () => {
  const { mutate } = useMutation(
    async (provider: string) => await loginSocmed(provider),
    {
      onSuccess: (url: string) => Router.replace(url),
    }
  );

  const onFinsih = (provider: string) => mutate(provider);

  const styleButton = {
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: '8px 0px 0px',
    background: GRADIENT.primary,
    color: COLOR.baseWhite,
  };

  return (
    <Accordion
      sx={{ width: '100%', justifyContent: 'space-between', boxShadow: 'none' }}
    >
      <AccordionSummary
        sx={{ backgroundColor: COLOR.baseSemiBlack }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Image src={Logo} alt={KomoverseTag} width={25} height={25} />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="subtitle2"
              sx={{ color: COLOR.baseWhite, fontWeight: 500 }}
            >
              {t('auth.komoverseWallet')}
            </Typography>
          </ListItemText>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: COLOR.baseSemiBlack }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
              {t('auth.signInWith')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/komoverse.webp"
                alt="komoverse-logo"
                height={40}
                width={80}
                priority={true}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              my: 2,
            }}
          >
            <Button
              onClick={() => onFinsih(Provider.GOOGLE)}
              size="large"
              sx={styleButton}
              endIcon={<GoogleIcon />}
            >
              {t('auth.signInGoogle')}
            </Button>
            <Button
              onClick={() => onFinsih(Provider.TWITTER)}
              size="large"
              sx={styleButton}
              endIcon={<TwitterIcon />}
            >
              {t('auth.signInTwitter')}
            </Button>
            <Button
              onClick={() => onFinsih(Provider.DISCORD)}
              size="large"
              sx={styleButton}
              endIcon={
                <Iconify icon="ic:baseline-discord" height={24} width={24} />
              }
            >
              {t('auth.signInDiscord')}
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>{t('auth.earnReward')}</div>
            <div>{t('auth.noChromeExtension')}</div>
            <div>{t('auth.buyNftYourPhone')}</div>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(KomoWallets);

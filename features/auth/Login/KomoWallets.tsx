import React from 'react';
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
import Image from 'next/image';
import Router from 'next/router';
import { t } from 'i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useMutation } from 'react-query';

import { COLOR, GRADIENT, KomoverseTag } from '@/utils/globalVariable';
import Iconify from '@/components/Iconify';
import { loginSocmed } from '@/services/auth';
import { Provider } from '@/types/general';
import actionModalAuth from '@/store/modalAuth/action';
import Logo from 'public/logo.svg';

const KomoWallets = () => {
  const { mutate } = useMutation(
    async (provider: string) => await loginSocmed(provider),
    {
      onSuccess: (url: string) => Router.replace(url),
    }
  );

  const onFinsih = (provider: string) => mutate(provider);

  const handleRegister = () => {
    actionModalAuth.setModalAuth({ modalType: 'REGISTER', visible: true });
  };

  const provider = [
    {
      id: 1,
      icon: <GoogleIcon />,
      onClick: () => onFinsih(Provider.GOOGLE),
      text: t('auth.signInGoogle'),
    },
    {
      id: 2,
      icon: <TwitterIcon />,
      onClick: () => onFinsih(Provider.TWITTER),
      text: t('auth.signInTwitter'),
    },
    {
      id: 3,
      icon: <Iconify icon="mdi:discord" />,
      onClick: () => onFinsih(Provider.DISCORD),
      text: t('auth.signInDiscord'),
    },
    {
      id: 4,
      icon: <Iconify icon="mdi:facebook" />,
      onClick: () => onFinsih(Provider.FACEBOOK),
      text: t('auth.signInFacebook'),
    },
    {
      id: 5,
      onClick: () => handleRegister(),
      text: t('auth.createAccount'),
    },
  ];

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              my: 1,
            }}
          >
            {provider.map((item) => (
              <Button
                key={item.id}
                onClick={item.onClick}
                size="large"
                sx={styleButton}
                endIcon={item.icon}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              my: 2,
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

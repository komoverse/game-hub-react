import React from 'react';
import Iconify from '@/components/Iconify';
import { MutationKey, Provider } from '@/types/general';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import { Box, Button } from '@mui/material';
import { t } from 'i18next';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import useResponsive from '@/hooks/useResponsive';
import { useMutation } from 'react-query';
import { loginSocmed } from '@/services/auth';
import Router from 'next/router';

const LoginSocmed = () => {
  const smDown = useResponsive('down', 'sm');

  const { mutate } = useMutation({
    mutationKey: MutationKey.LOGIN_SOCMED,
    mutationFn: (provider: string) => loginSocmed(provider),
    onSuccess: (url: string) => Router.replace(url),
  });

  const selectProvider = (provider: string) => mutate(provider);

  const provider = [
    {
      id: 1,
      icon: <GoogleIcon />,
      onClick: () => selectProvider(Provider.GOOGLE),
      text: t('auth.signInGoogle'),
    },
    {
      id: 2,
      icon: <TwitterIcon />,
      onClick: () => selectProvider(Provider.TWITTER),
      text: t('auth.signInTwitter'),
    },
    {
      id: 3,
      icon: <Iconify icon="mdi:discord" />,
      onClick: () => selectProvider(Provider.DISCORD),
      text: t('auth.signInDiscord'),
    },
    {
      id: 4,
      icon: <Iconify icon="mdi:facebook" />,
      onClick: () => selectProvider(Provider.FACEBOOK),
      text: t('auth.signInFacebook'),
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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: !smDown ? '300px' : '250px',
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
    </>
  );
};

export default LoginSocmed;

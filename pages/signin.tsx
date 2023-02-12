import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Iconify } from '@/components/index';
import { t } from 'i18next';
import { useMutation } from 'react-query';
import { loginSocmed } from '@/services/auth';
import { LoginSocmedDto } from '@/types/auth';

const ContainterSigin = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'black',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '16px',
  width: '100vw',
}));

const Wrapper = styled(Paper)(() => ({
  color: COLOR.baseWhite,
  backgroundColor: 'black',
  borderRadius: '4px',
  padding: '32px 24px',
  border: '1px solid rgb(45, 45, 45)'
}));

const SignIn = () => {
  const { mutate } = useMutation((data: LoginSocmedDto) => loginSocmed(data))

  const onFinsih = ({ provider, token }: LoginSocmedDto) => {
    const data: LoginSocmedDto = { provider, token }
    mutate(data, {
      onError: (error) => console.log(error),
      onSuccess: (data) => console.log(data)
    })
  };

  const styleButton = {
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: '8px 0px 0px',
    background: GRADIENT.primary,
    color: COLOR.baseWhite
  }

  const token = 'ya29.a0AVvZVsplZ08DX7DQpLAzFkFMALjF-VtVSWKPY5gFMJACzThKPKaY38J1hkeOdE12_e5k7dcZohibTf_Xf5RYzFzmEVBdY4morTKwG_nrUbQR9Zt5BjIshew4fFNRNmjjkwITkVVcdWop4Q50cnyHXVamSvXmaCgYKAU8SARASFQGbdwaI8uJtEaFMM6f6pTv3sI45RA0163';

  return (
    <ContainterSigin>
      <Wrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 3 }}>
            <Typography variant='h3' sx={{ fontWeight: 500, mb: 1 }}>{t('auth.signInWith')}</Typography>
            <Image
              src="/komoverse.webp"
              alt="komoverse-logo"
              height={50}
              width={100}
              priority={true}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <Button
              onClick={() => onFinsih({ provider: 'google', token: token })}
              size='large'
              sx={styleButton} endIcon={<GoogleIcon />}
            >
              {t('auth.signInGoogle')}
            </Button>
            <Button
              onClick={() => onFinsih({ provider: 'twitter', token: token })}
              size='large'
              sx={styleButton}
              endIcon={<TwitterIcon />}
            >
              {t('auth.signInTwitter')}
            </Button>
            <Button
              onClick={() => onFinsih({ provider: 'discord', token: token })}
              size='large'
              sx={styleButton}
              endIcon={<Iconify icon="ic:baseline-discord" height={24} width={24} />}
            >
              {t('auth.signInDiscord')}
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 6 }}>
            <div>{t('auth.earnReward')}</div>
            <div>{t('auth.noChromeExtension')}</div>
            <div>{t('auth.buyNftYourPhone')}</div>
          </Box>
        </Box>
      </Wrapper>
    </ContainterSigin>
  )
}

export default SignIn
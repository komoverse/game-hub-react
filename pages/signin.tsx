import React from 'react'
import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Iconify } from '@/components/index';
import { t } from 'i18next';
import { useMutation } from 'react-query';
import { loginSocmed } from '@/services/auth';
import Router from 'next/router';
import { Provider } from '@/types/general';
import { NextResponse } from 'next/server';
import isEmpty from 'lodash/isEmpty';

export const ContainterSigin = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'black',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '16px',
}));

export const Wrapper = styled(Paper)(() => ({
  color: COLOR.baseWhite,
  backgroundColor: 'black',
  borderRadius: '8px',
  padding: '32px 24px',
  border: `1px solid ${COLOR.backgroundTableHover}`,
}));

const SignIn = ({ query }: any) => {
  const { mutate, isLoading, status } = useMutation(async (provider: string) => await loginSocmed(provider), {
    onSuccess: (url: string) => Router.replace(url)
  })

  const onFinsih = (provider: string) => mutate(provider)

  const styleButton = {
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: '8px 0px 0px',
    background: GRADIENT.primary,
    color: COLOR.baseWhite
  }

  return (
    <ContainterSigin>
      <Grid container justifyContent={'center'}>
        <Grid item md={6} lg={3} xl={3} sm={12} xs={12}>
          <Wrapper>
            {isLoading || !isEmpty(query) ? (
              <Box sx={{ textAlign: 'center' }}>
                <CircularProgress color='success' />
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                <Box sx={{ marginBottom: 3 }}>
                  <Typography variant='h3' sx={{ fontWeight: 500, mb: 1 }}>{t('auth.signInWith')}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                      src="/komoverse.webp"
                      alt="komoverse-logo"
                      height={50}
                      width={100}
                      priority={true}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                  <Button
                    onClick={() => onFinsih(Provider.GOOGLE)}
                    size='large'
                    sx={styleButton} endIcon={<GoogleIcon />}
                  >
                    {t('auth.signInGoogle')}
                  </Button>
                  <Button
                    onClick={() => onFinsih(Provider.TWITTER)}
                    size='large'
                    sx={styleButton}
                    endIcon={<TwitterIcon />}
                  >
                    {t('auth.signInTwitter')}
                  </Button>
                  <Button
                    onClick={() => onFinsih(Provider.DISCORD)}
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
            )}
          </Wrapper>
        </Grid>
      </Grid>
    </ContainterSigin>
  )
}

export default SignIn

export const getServerSideProps = async (res: NextResponse) => {
  // @ts-ignore
  const { query } = res

  return {
    props: {
      query
    }
  }
}
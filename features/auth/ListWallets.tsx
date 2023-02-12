import React from 'react'
import { COLOR, KomoverseTag } from '@/utils/globalVariable'
import {
  Box,
  Button,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@mui/material'
import { t } from 'i18next'
import Image from 'next/image'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useConnect } from 'wagmi'
import { Toast } from '@/components/index'
import actionModalAuth from '@/store/modalAuth/action'
import actionWallets from '@/store/wallets/action'
import { WalletsDto } from '@/types/auth'
import { useMutation } from 'react-query'
import { loginWallet } from '@/services/auth'

export const Solana = ({ wallet }: any) => {
  const chooseLoginSocmed = () => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 378) / 2 / systemZoom + dualScreenLeft
    const top = (height - 600) / 2 / systemZoom + dualScreenTop

    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=378,height=600,left=${left},top=${top}`;
    window.open('/signin', 'Komoverse Wallet', params)
  }

  return (
    <Button sx={{ width: '100%', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <ListItemIcon>
          <Image
            src={wallet.image}
            alt={KomoverseTag}
            width={25}
            height={25}
          />
        </ListItemIcon>
        <ListItemText>
          <Typography variant='subtitle2' sx={{ color: COLOR.baseWhite, fontWeight: 500 }}>
            {wallet.name}
          </Typography>
        </ListItemText>
      </Box>
      {wallet.id === 1 ? (
        <ListItemSecondaryAction
          onClick={chooseLoginSocmed}
          sx={{ color: COLOR.baseGray, fontWeight: 500 }}
        >
          {t('auth.recommended')}
        </ListItemSecondaryAction>
      ) : wallet.id === 2 ? (
        <ArrowForwardOutlinedIcon sx={{ color: COLOR.baseGray }} />
      ) : null}
    </Button>
  )
}

export const Ethereum = () => {
  const [openToast, setOpenToast] = React.useState<boolean>(false)
  const [isMessage, setIsMessage] = React.useState<string>('')

  const { connectAsync, connectors } = useConnect({
    onSuccess: (data) => {
      actionModalAuth.setModalAuth({ visible: false });
      actionWallets.setWallets(data)
    },
    onError: (error) => console.error(error),
    onSettled(data, error) {
      if (error) {
        setOpenToast(true)
        setIsMessage(error.message)
      }
    },
  })

  const { mutate } = useMutation((data: WalletsDto) => loginWallet(data))

  const handleLoginWallet = async (data: any) => {
    await connectAsync(data)
      .then((res: any) => mutate(res))
      .catch((err) => console.log(err.response))
  };

  return (
    <>
      {connectors?.map((connector) => (
        <Button
          key={connector?.id}
          disabled={!connector.ready}
          sx={{ width: '100%', justifyContent: 'space-between' }}
          onClick={() => handleLoginWallet({ connector })}
        >
          <Box sx={{ display: 'flex' }}>
            <ListItemIcon>
              <Image
                src={connector?.options.appLogoUrl}
                alt={KomoverseTag}
                width={25}
                height={25}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='subtitle2' sx={{ color: COLOR.baseWhite, fontWeight: 500 }}>
                {connector?.name}
              </Typography>
            </ListItemText>
          </Box>
          {connector.name === "Komoverse Wallet" && (
            <ListItemSecondaryAction
              sx={{ color: COLOR.baseGray, fontWeight: 500 }}
            >
              {t('auth.recommended')}
            </ListItemSecondaryAction>
          )}
        </Button>
      ))
      }
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        message={isMessage}
        position={{ vertical: 'top', horizontal: 'center' }}
        type="error"
      />
    </>
  )
}
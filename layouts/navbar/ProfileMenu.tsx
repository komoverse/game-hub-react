import { memo, useRef, useState } from 'react';
import { COLOR, GRADIENT } from '@/utils/globalVariable'
import { Box,  Button,  CircularProgress,  Divider, MenuList, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { ErrorResponseDto, TypeAuthLogin } from '@/types/general';
import actionProfile from '@/store/profile/action'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useQuery } from 'react-query';
import { getProfile } from '@/services/homepage';
import isEmpty from 'lodash/isEmpty';
import { ProfileDto } from '@/types/home';
import { t } from 'i18next';
import dynamic from 'next/dynamic';
import MenuPopover from '@/components/MenuPopover';
import { IDR } from '@/utils/currency';
import MenuKomoWallet from './MenuKomoWallet';
import actionModalAuth from '@/store/modalAuth/action'

const ProfileMenu = () => {
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { token } = useSelector((state: ReduxState) => state.login as TypeAuthLogin)
  const { sc_wallet_fail_count } = useSelector((state: ReduxState) => state.profile as ProfileDto)

  
  const { data: profile, isLoading } = useQuery('profile', () => getProfile(), {
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !isEmpty(token),
    onSuccess: (data: ProfileDto) => actionProfile.setProfile(data),
    onError: (error: ErrorResponseDto) => error,
  })
  
  const handleClose = () => setIsOpen(false);
  const handleVisibleLogin = () => actionModalAuth.setModalAuth({ visible: true });
  const handleOpenAccountPopover = () => setIsOpen(true);

  const togglePopover = () => {
    if (token) {
      handleOpenAccountPopover()
    } else {
      handleVisibleLogin()
    }
  }

  if (isLoading) {
    return (
      <CircularProgress size="1rem" color="success" />
    )
  }

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={togglePopover}
        variant="contained"
        size="medium"
        sx={{
          '&:hover': {
            backgroundColor: 'transparent'
          },
          color: COLOR.baseWhite,
          background: token ? "transparent" : GRADIENT.primary,
          borderRadius: 2,
          border: `1px solid ${COLOR.baseGreen}`
        }}
        endIcon={token && <AccountBalanceWalletOutlinedIcon sx={{ width: 20, height: 20, color: COLOR.baseGreen }} />}
      >
        {token ? profile?.komo_username : t('navbar.login')}
      </Button>

      <MenuPopover
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          background: COLOR.backgroundCardSemiBlack,
          mt: 3,
          ml: 0.75,
          width: 304,
          borderRadius: '11px',
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
          },
        }}
      >
        <MenuList>
          <Box sx={{ paddingBottom: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Box sx={{ margin: '24px 0px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: COLOR.baseSemiTextGray }}>
                {t('home.walletBalance')}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 500 }}>
                {IDR(sc_wallet_fail_count, t('utils.format'), t('utils.currency'))}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </MenuList>

        <MenuKomoWallet />

      </MenuPopover>
    </>
  )
}

export default memo(ProfileMenu)
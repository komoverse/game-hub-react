import React from 'react'
import MenuPopover from '@/components/MenuPopover'
import { COLOR } from '@/utils/globalVariable'
import { Box, Divider, MenuList, Typography } from '@mui/material'
import { IDR } from '@/utils/currency';
import MenuKomoWallet from './MenuKomoWallet';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { t } from 'i18next';
import { ProfileDto } from '@/types/home';

type TypeAccountPopover = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  anchorRef?: any
};

const AccountPopover = ({ open, setOpen, anchorRef }: TypeAccountPopover) => {
  const { sc_wallet_fail_count } = useSelector((state: ReduxState) => state.profile as ProfileDto)

  const handleClose = () => setOpen(false);

  return (
    <MenuPopover
      ref={anchorRef}
      open={open}
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
  )
}

export default React.memo(AccountPopover)
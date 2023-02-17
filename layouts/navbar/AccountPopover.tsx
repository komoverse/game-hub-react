import React from 'react'
import MenuPopover from '@/components/MenuPopover'
import { COLOR } from '@/utils/globalVariable'
import { Box, Divider, MenuList, Typography } from '@mui/material'
import { IDR } from '@/utils/currency';
import MenuKomoWallet from './MenuKomoWallet';
import { useQuery } from 'react-query';
import { getPortfolio } from '@/services/homepage';
import isEmpty from 'lodash/isEmpty';
import { ErrorResponseDto, TypeAuthLogin } from '@/types/general';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';

const AccountPopover = ({ open, setOpen, anchorRef }: any) => {
  const { token } = useSelector((state: ReduxState) => state.login as TypeAuthLogin)

  const { data, isLoading } = useQuery('portfolio', () => getPortfolio(), {
    staleTime: 3000,
    cacheTime: 3000,
    enabled: !isEmpty(token),
    onError: (error: ErrorResponseDto) => error,
  })

  const handleClose = () => setOpen(false);

  return (
    <MenuPopover
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
              Wallet Balance
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>
              {IDR(120000, 'id-ID', 'USD')}
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
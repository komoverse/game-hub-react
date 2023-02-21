import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { COLOR, GRADIENT } from '@/utils/globalVariable';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useQuery } from 'react-query';
import { getPortfolio } from '@/services/homepage';
import isEmpty from 'lodash/isEmpty';
import { ErrorResponseDto } from '@/types/general';
import { MenuPopover } from '@/components/index';
import SearchIcon from '@mui/icons-material/Search';

const WalletBalance = () => {
  const anchorRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const { data } = useQuery('portfolio', () => getPortfolio(), {
    staleTime: 3000,
    cacheTime: 3000,
    // enabled: !isEmpty(token),
    // onSuccess: (data: ProfileDto) => actionProfile.setProfile(data),
    onError: (error: ErrorResponseDto) => error,
  });

  const handleClose = () => setIsOpen(false);

  return (
    <Box>
      <Button
        ref={anchorRef}
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          background: COLOR.backgroundTableStriped1,
          color: COLOR.baseWhite,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          width: 100,
        }}
        endIcon={<ArrowDropDownRoundedIcon />}
        size="small"
      >
        Balance
      </Button>
      <Button
        sx={{
          background: GRADIENT.primary,
          color: COLOR.baseWhite,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: 100,
        }}
        startIcon={<AccountBalanceWalletRoundedIcon />}
        size="small"
      >
        Wallet
      </Button>

      <MenuPopover
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          background: COLOR.backgroundCardSemiBlack,
          ml: 0.75,
          width: 280,
          borderRadius: '11px',
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
          },
        }}
      >
        <Box>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            {/* <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              size="small"
              id="outlined-adornment-password"
              startAdornment={<SearchIcon />}
              label="Password"
              fullWidth
            /> */}
            <TextField
              id="outlined-basic"
              label="Search Currenties"
              variant="outlined"
              size="small"
              fullWidth
            />
          </FormControl>
        </Box>
      </MenuPopover>
    </Box>
  );
};

export default WalletBalance;

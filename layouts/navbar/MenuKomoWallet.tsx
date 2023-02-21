import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import InstallDesktopRoundedIcon from '@mui/icons-material/InstallDesktopRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import LockIcon from '@mui/icons-material/Lock';
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '@mui/material';
import { COLOR } from '@/utils/globalVariable';
import { t } from 'i18next';
import actionAuth from '@/store/auth/action';
import Router from 'next/router';

const MenuKomoWallet = () => {
  const logout = async () => actionAuth.clearAuthLogin();

  const menuItemOneKomoWallet = [
    {
      id: 1,
      name: t('profile.myAccount'),
      icon: <PersonRoundedIcon />,
      onClick: () => console.log('items'),
    },
    {
      id: 2,
      name: t('profile.viewWallets'),
      icon: <AccountBalanceWalletRoundedIcon />,
      onClick: () => console.log('manage'),
    },
    {
      id: 3,
      name: t('profile.learnMore'),
      icon: <OpenInNewRoundedIcon />,
      onClick: () => console.log('connect'),
    },
  ];

  const menuItemTwoKomoWallet = [
    {
      id: 1,
      name: t('profile.exportPhrase'),
      icon: <VpnKeyRoundedIcon />,
      onClick: () => console.log('items'),
    },
    {
      id: 2,
      name: t('profile.setupAccount'),
      icon: <LockIcon />,
      onClick: () => console.log('manage'),
    },
  ];

  const menuItemThreeKomoWallet = [
    {
      id: 1,
      name: t('profile.downloadKomo'),
      icon: <InstallDesktopRoundedIcon />,
      onClick: () => console.log('items'),
    },
    {
      id: 2,
      name: t('profile.diconnect'),
      icon: <VisibilityOffRoundedIcon />,
      onClick: async () => await logout().then(() => Router.reload()),
    },
  ];

  const styleButton = { '&:hover': { backgroundColor: 'transparent' } };

  return (
    <div>
      {menuItemOneKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton}>
            <ListItemIcon sx={{ minWidth: 56 }}>{menu.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>
                {menu.name}
              </Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
      <Divider />

      {menuItemTwoKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton}>
            <ListItemIcon sx={{ minWidth: 56 }}>{menu.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>
                {menu.name}
              </Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
      <Divider />

      {menuItemThreeKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton} onClick={menu.onClick}>
            <ListItemIcon sx={{ minWidth: 56 }}>{menu.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>
                {menu.name}
              </Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
    </div>
  );
};

export default React.memo(MenuKomoWallet);

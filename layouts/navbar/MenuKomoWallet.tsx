import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
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
import secureLocalStorage from '@/utils/secureLocalStorage';
import { t } from 'i18next';
import actionAuth from '@/store/auth/action';
import Cookies from 'js-cookie';
import { STATE_AUTH } from '@/store/auth/reducer';
import Router from 'next/router';

const MenuKomoWallet = () => {
  const logout = async () => actionAuth.clearAuthLogin();

  const menuItemOneKomoWallet = [
    {
      id: 1,
      name: t('profile.myAccount'),
      icon: <PersonIcon />,
      onClick: () => console.log('items'),
    },
    {
      id: 2,
      name: t('profile.viewWallets'),
      icon: <AccountBalanceWalletIcon />,
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
      icon: <VpnKeyOffIcon />,
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

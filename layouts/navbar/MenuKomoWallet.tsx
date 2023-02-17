import React from 'react'
import PersonIcon from '@mui/icons-material/Person';;
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import InstallDesktopRoundedIcon from '@mui/icons-material/InstallDesktopRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import LockIcon from '@mui/icons-material/Lock';
import { Button, Divider, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { COLOR } from '@/utils/globalVariable';
import secureLocalStorage from '@/utils/secureLocalStorage';

const MenuKomoWallet = () => {
  const menuItemOneKomoWallet = [
    {
      id: 1,
      name: 'My Account',
      icon: <PersonIcon />,
      onClick: () => console.log('items')
    },
    {
      id: 2,
      name: 'View Wallets',
      icon: <AccountBalanceWalletIcon />,
      onClick: () => console.log('manage')
    },
    {
      id: 3,
      name: 'Learn More',
      icon: <OpenInNewRoundedIcon />,
      onClick: () => console.log('connect')
    },
    // {
    //   id: 4,
    //   name: 'Disconnect',
    //   icon: <VpnKeyOffIcon />,
    //   // onClick: () => disconnect()
    // }
  ]

  const menuItemTwoKomoWallet = [
    {
      id: 1,
      name: 'Export seed phrase',
      icon: <VpnKeyRoundedIcon />,
      onClick: () => console.log('items')
    },
    {
      id: 2,
      name: 'Setup account recovery',
      icon: <LockIcon />,
      onClick: () => console.log('manage')
    },
  ]

  const menuItemThreeKomoWallet = [
    {
      id: 1,
      name: 'Download Komoverse',
      icon: <InstallDesktopRoundedIcon />,
      onClick: () => console.log('items')
    },
    {
      id: 2,
      name: 'Disconnect',
      icon: <VpnKeyOffIcon />,
      onClick: () => secureLocalStorage.clearItem('ssoLogin')
    },
  ]

  const styleButton = { '&:hover': { backgroundColor: 'transparent' } }

  return (
    <div>
      {menuItemOneKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton}>
            <ListItemIcon sx={{ minWidth: 56 }}>
              {menu.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>{menu.name}</Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
      <Divider />

      {menuItemTwoKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton}>
            <ListItemIcon sx={{ minWidth: 56 }}>
              {menu.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>{menu.name}</Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
      <Divider />

      {menuItemThreeKomoWallet.map((menu) => (
        <MenuItem key={menu.id}>
          <Button sx={styleButton} onClick={menu.onClick}>
            <ListItemIcon sx={{ minWidth: 56 }}>
              {menu.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>{menu.name}</Typography>
            </ListItemText>
          </Button>
        </MenuItem>
      ))}
    </div>
  )
}

export default React.memo(MenuKomoWallet)
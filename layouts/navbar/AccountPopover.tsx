import React from 'react'
import MenuPopover from '@/components/MenuPopover'
import { COLOR } from '@/utils/globalVariable'
import { Box, Button, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddBoxIcon from '@mui/icons-material/AddBox';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import InstallDesktopRoundedIcon from '@mui/icons-material/InstallDesktopRounded';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { shortenBalanceWallet, shortenWalletAddress } from '@/utils/shorten';

const AccountPopover = ({ open, setOpen, anchorRef }: any) => {
  const handleClose = () => setOpen(false);
  const { address } = useAccount()
  const { data } = useBalance({ address })
  const { disconnect } = useDisconnect()

  const manuItem = [
    {
      id: 1,
      name: 'View Items',
      icon: <InventoryIcon />,
      onclick: () => console.log('items')
    },
    {
      id: 2,
      name: 'Manage Wallets',
      icon: <AccountBalanceWalletIcon />,
      onclick: () => console.log('manage')
    },
    {
      id: 3,
      name: 'Connect Wallet',
      icon: <AddBoxIcon />,
      onclick: () => console.log('connect')
    },
    {
      id: 4,
      name: 'Disconnect',
      icon: <VpnKeyOffIcon />,
      onclick: () => disconnect()
    }
  ]

  const disconnectWallet = async () => {
    console.log('disconnect')
  }

  return (
    <MenuPopover
      open={open}
      onClose={handleClose}
      anchorEl={anchorRef.current}
      sx={{
        background: COLOR.backgroundCardSemiBlack,
        mt: 1.5,
        ml: 0.75,
        width: 304,
        "& .MuiMenuItem-root": {
          px: 1,
          typography: "body2",
          borderRadius: 0.75,
        },
      }}
    >
      <MenuList>
        <Box sx={{ paddingBottom: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Typography variant="body2" sx={{
            '&:hover': {
              textDecoration: 'underline'
            },
            fontWeight: 500,
            color: COLOR.baseGreen,
            cursor: 'pointer',
            alignItems: 'center',
            display: 'flex'
          }}>
            {shortenWalletAddress(address!)}
            <ContentCopyOutlinedIcon fontSize="inherit" sx={{ marginLeft: '5px' }} />
          </Typography>
          <Box sx={{ margin: '24px 0px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Typography variant="caption">Wallet Balance</Typography>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>{shortenBalanceWallet(Number(data?.formatted))} {data?.symbol}</Typography>
          </Box>
        </Box>
        <Divider />
      </MenuList>
      {manuItem.map((menu) => (
        <MenuItem key={menu.id}>
          <Button
            onClick={() => disconnectWallet()}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}>
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
      <MenuItem>
        <Button sx={{
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }}>
          <ListItemIcon sx={{ minWidth: 56 }}>
            <InstallDesktopRoundedIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1" sx={{ color: COLOR.baseWhite }}>Download Komoverse</Typography>
          </ListItemText>
        </Button>
      </MenuItem>
    </MenuPopover>
  )
}

export default React.memo(AccountPopover)
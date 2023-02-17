import { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import Image from 'next/image';
import { Iconify } from '@/components/index';
import SearchField from './SearchField';
import LanguageMenu from './LanguageMenu';
import SearchFieldPopOver from './SearchFieldPopover';
import { APPBAR_DESKTOP, APPBAR_MOBILE } from '../constants';
import useResponsive from '@/hooks/useResponsive';
import { useRouter } from 'next/router';
import Login from '@/features/auth/Login';
import { COLOR } from '@/utils/globalVariable';
import ProfileMenu from './ProfileMenu';

const AppbarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: COLOR.backgroundCardSemiBlack,
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('md')]: {
    minHeight: APPBAR_DESKTOP,
  },
}));

interface NavbarProps {
  toggleDrawer: () => void;
}

function Navbar({ toggleDrawer }: NavbarProps) {
  const isMobile = useResponsive('down', 'sm');
  const router = useRouter();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => setIsSearchBarOpen((prev) => !prev);

  useEffect(() => {
    if (!isMobile) {
      setIsSearchBarOpen(false);
    }
  }, [isMobile]);

  return (
    <AppbarStyled>
      <ToolbarStyled>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1 }}
              onClick={() => toggleDrawer()}
            >
              <Iconify icon="ic:baseline-menu" height={24} width={24} />
            </IconButton>
            <Image
              src="/komoverse.webp"
              alt="komoverse-logo"
              height={40}
              width={84}
              onClick={() => router.push('/', '/')}
              priority={true}
              style={{ cursor: 'pointer' }}
            />
          </Box>
          <Box>{!isMobile && <SearchField />}</Box>
          <SearchFieldPopOver
            isOpen={isSearchBarOpen}
            toggleOpen={toggleSearchBar}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              size="medium"
              sx={{ display: { sm: 'none' } }}
              onClick={toggleSearchBar}
            >
              <Iconify icon="ic:outline-search" height={24} width={24} />
            </IconButton>
            <LanguageMenu />
            <ProfileMenu />
          </Box>
        </Box>
      </ToolbarStyled>

      <Login />
    </AppbarStyled>
  );
}

export default Navbar;

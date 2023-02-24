import { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { APPBAR_DESKTOP, APPBAR_MOBILE } from './constants';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getSidebarMenu } from '@/services/sidebar';
import MiniSidebar from './sidebar/MiniSidebar';
import useResponsive from '@/hooks/useResponsive';
import HeroBanner from '@/features/game/HeroBanner/HeroBanner';
import { COLOR } from '@/utils/globalVariable';
import { Toast } from '../components';

interface LayoutProps {
  children: ReactNode;
}

const RootStyled = styled('div')({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
});

const MainStyled = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    paddingTop: APPBAR_DESKTOP,
  },
}));

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMiniDrawerOpen, setIsMiniDrawerOpen] = useState(true);
  const isMobile = useResponsive('down', 'md');

  const { data: sidebarMenuItems, isSuccess } = useQuery(
    ['sidebarMenu'],
    () => getSidebarMenu(),
    {}
  );

  const router = useRouter();
  const isGamePage = router.pathname.includes('[game]');

  const toggleDrawer = () => {
    if (isGamePage && !isMobile) {
      setIsMiniDrawerOpen(!isMiniDrawerOpen);
    } else {
      setIsOpen(!isOpen);
      isMobile && setIsMiniDrawerOpen(false);
    }
  };

  return (
    <RootStyled>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isGamePage={isGamePage}
        menuItems={sidebarMenuItems}
        isSuccess={isSuccess}
      />
      <MiniSidebar
        isOpen={isMiniDrawerOpen}
        setIsOpen={setIsOpen}
        isGamePage={isGamePage}
        menuItems={sidebarMenuItems}
        isSuccess={isSuccess}
      />
      <MainStyled
        sx={{
          position: isGamePage ? 'relative' : 'static',
          backgroundColor: COLOR.backgroundRoot,
        }}
      >
        {isGamePage && <HeroBanner />}
        {children}
      </MainStyled>
      <Toast />
    </RootStyled>
  );
}

export default Layout;

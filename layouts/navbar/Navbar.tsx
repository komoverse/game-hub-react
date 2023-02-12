import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, Button, Avatar, Typography, Paper, MenuList, Divider, MenuItem, ListItemIcon, ListItemText, ButtonBase } from "@mui/material";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Iconify } from "@/components/index";
import SearchField from "./SearchField";
import LanguageMenu from "./LanguageMenu";
import SearchFieldPopOver from "./SearchFieldPopover";
import { APPBAR_DESKTOP, APPBAR_MOBILE } from "../constants";
import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "next/router";
import Login from "@/features/auth/Login";
import actionModalAuth from '@/store/modalAuth/action'
import { useSelector } from "react-redux";
import { ReduxState } from "@/types/redux";
import { shortenWalletAddress } from "@/utils/shorten";
import { WalletsDto } from "@/types/auth";
import { COLOR, GRADIENT } from "@/utils/globalVariable";
import AccountPopover from "./AccountPopover";

const AppbarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "#111111",
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    minHeight: APPBAR_DESKTOP,
  },
}));

interface NavbarProps {
  toggleDrawer: () => void;
}

function Navbar({ toggleDrawer }: NavbarProps) {
  const { t } = useTranslation();
  const isMobile = useResponsive("down", "sm");
  const router = useRouter();
  const anchorRef = useRef(null);

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [accountPopover, setAccountPopover] = useState(false);

  const walletsData: WalletsDto = useSelector((state: ReduxState) => state.wallets)
  const walletLogo = walletsData?.connector?.options.appLogoUrl

  const toggleSearchBar = () => setIsSearchBarOpen((prev) => !prev);
  const handleVisibleLogin = () => actionModalAuth.setModalAuth({ visible: true });
  const handleOpenAccountPopover = () => setAccountPopover(true);

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
              onClick={() => router.push("/", "/")}
              priority={true}
            />
          </Box>
          <Box>{!isMobile && <SearchField />}</Box>
          <SearchFieldPopOver
            isOpen={isSearchBarOpen}
            toggleOpen={toggleSearchBar}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="medium"
              sx={{ display: { sm: "none" } }}
              onClick={toggleSearchBar}
            >
              <Iconify icon="ic:outline-search" height={24} width={24} />
            </IconButton>
            <LanguageMenu />
            <Button
              ref={anchorRef}
              onClick={walletsData.account !== undefined ? handleOpenAccountPopover : handleVisibleLogin}
              variant="contained"
              size="medium"
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                color: COLOR.baseWhite,
                background: walletsData.account !== undefined ? "transparent" : GRADIENT.primary,
                borderRadius: 2,
                border: `1px solid ${COLOR.baseGreen}`
              }}
              startIcon={
                walletsData.account !== undefined && <Avatar src={walletLogo} sx={{ width: 24, height: 24 }} />
              }
            >
              {walletsData.account !== undefined ? (
                <Typography variant="body2" color={COLOR.baseGreen}>({shortenWalletAddress(walletsData?.account)})</Typography>
              ) : t("navbar.login")}
            </Button>
          </Box>
        </Box>
      </ToolbarStyled>

      <Login />

      <AccountPopover
        open={accountPopover}
        setOpen={setAccountPopover}
        anchorRef={anchorRef}
      />
    </AppbarStyled>
  );
}

export default Navbar;

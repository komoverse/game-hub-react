import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Iconify from "@/components/Iconify";
import SearchField from "./SearchField";
import LanguageMenu from "./LanguageMenu";
import SearchFieldPopOver from "./SearchFieldPopover";

import { APPBAR_DESKTOP, APPBAR_MOBILE } from "../constants";
import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "next/router";

const AppbarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "#111111",
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
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

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsSearchBarOpen(false);
    }
  }, [isMobile]);

  const changePage = () => {
    router.push("/komo-chess/items", "/komo-chess/items", { locale: router.locale });
  };

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
            />
          </Box>
          <Box>{!isMobile && <SearchField isOpen={isSearchBarOpen} />}</Box>
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
              onClick={changePage}
              variant="contained"
              size="medium"
              sx={{
                color: "#fff",
                background:
                  "radial-gradient(293.74% 1431.43% at -18.64% -62.88%, #99EC13 0%, #088F2E 63.54%, #054D19 100%)",
                borderRadius: 2,
              }}
            >
              {t("navbar.login")}
            </Button>
          </Box>
        </Box>
      </ToolbarStyled>
    </AppbarStyled>
  );
}

export default Navbar;

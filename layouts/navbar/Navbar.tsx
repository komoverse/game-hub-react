import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import SearchField from "./SearchField";
import LanguageMenu from "./LanguageMenu";

const APPBAR_MOBILE = "64px";
const APPBAR_DESKTOP = "70px";

const AppbarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.primary.dark,
  backgroundImage: "none",
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

function Navbar() {
  const { t } = useTranslation();

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
            component="div"
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
            >
              <MenuIcon />
            </IconButton>
            <Image
              src="/komoverse.webp"
              alt="komoverse-logo"
              height={54}
              width={126}
            />
          </Box>
          <SearchField />
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton size="medium" sx={{ display: { sm: "none" } }}>
              <SearchIcon />
            </IconButton>
            <LanguageMenu />
            <Button
              variant="outlined"
              size="large"
              startIcon={<AccountBalanceWalletOutlinedIcon />}
            >
              <Box
                component="span"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {t("navbar.wallet")}
              </Box>
            </Button>
          </Box>
        </Box>
      </ToolbarStyled>
    </AppbarStyled>
  );
}

export default Navbar;

import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  IconButton,
  AppBar,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SearchField from "./SearchField";
import Image from "next/image";

const drawerWidth = 240;

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ backgroundColor: "#000" }}
        >
          <Toolbar>
            <Box
              component="div"
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
                  onClick={() => toggleDrawer()}
                >
                  <MenuIcon />
                </IconButton>
                <Image
                  src="/komoverse.webp"
                  alt="komoverse-logo"
                  height={70}
                  width={140}
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
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<AccountBalanceWalletOutlinedIcon />}
                >
                  <Box
                    component="span"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    connect wallet
                  </Box>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000",
          },
        }}
        hideBackdrop
        ModalProps={{ disableEnforceFocus: true }}
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, paddingTop: 8, height: "100vh" }}
      >
        {children}
      </Box>
    </Box>
  );
}

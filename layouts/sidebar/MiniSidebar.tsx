import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
} from "../constants";
import { SidebarProps } from "./types";
import { sidebarHeader } from "../constants";
import Iconify from "@/components/Iconify";

export default function MiniSidebar({
  isOpen,
  setIsOpen,
  menuItems,
  isGamePage,
  isSuccess,
}: SidebarProps) {
  const toggleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Drawer
      variant="persistent"
      sx={{
        width: isOpen && isGamePage ? "58px" : "0",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "58px",
          overflow: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#000",
          backgroundImage: "none",
        },
      }}
      hideBackdrop
      ModalProps={{ disableEnforceFocus: true }}
      open={isOpen && isGamePage}
      onMouseEnter={() => toggleOpen()}
    >
      <Box
        sx={{
          mt: { xs: APPBAR_MOBILE, md: APPBAR_DESKTOP },
        }}
      >
        {isSuccess &&
          menuItems?.map((item, i) => (
            <List key={i}>
              <ListItem key="mints">
                <ListItemIcon>
                  <Iconify
                    icon={sidebarHeader[item.header].icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          ))}
        <List>
          <ListItem key="mints">
            <ListItemIcon>
              <Iconify
                icon={sidebarHeader["resource"].icon}
                height={24}
                width={24}
              />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

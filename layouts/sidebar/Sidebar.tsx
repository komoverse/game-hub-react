import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
  SIDEBAR_WIDTH,
  komoverseSocialMedia,
} from "../constants";
import SidebarMenuItem from "./SidebarMenuItem";
import useResponsive from "@/hooks/useResponsive";
import { SidebarProps } from "./types";
import { COLOR } from "@/utils/globalVariable";

export default function Sidebar({ isOpen, setIsOpen, isGamePage, menuItems, isSuccess }: SidebarProps) {
  const isMobile = useResponsive("down", "md");

  const toggleClose = () => {
    if (isGamePage) setIsOpen(false);
  };

  return (
    <Drawer
      variant={isMobile || isGamePage ? "temporary" : "persistent"}
      sx={{
        width: isOpen ? SIDEBAR_WIDTH : "0",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          backgroundColor: COLOR.backgroundRoot,
          backgroundImage: "none",
        },
      }}
      hideBackdrop
      ModalProps={{ disableEnforceFocus: true }}
      open={isOpen}
      onMouseLeave={() => toggleClose()}
    >
      <Box
        sx={{
          mt: { xs: APPBAR_MOBILE, md: APPBAR_DESKTOP },
        }}
      >
        {isSuccess &&
          menuItems?.map((item, i) => (
            <SidebarMenuItem items={item.items} header={item.header} key={i} />
          ))}
        {komoverseSocialMedia.map((item, i) => (
          <SidebarMenuItem items={item.list} header={item.header} key={i} />
        ))}
      </Box>
    </Drawer>
  );
}

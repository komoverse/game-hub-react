import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
  SIDEBAR_WIDTH,
  komoverseSocialMedia,
} from "../constants";
import SidebarMenuItem from "./SidebarMenuItem";
import useResponsive from "@/hooks/useResponsive";
import { getSidebarMenu } from "services/sidebar";
import { SidebarProps } from "./types";

export default function Sidebar({ isOpen }: SidebarProps) {
  const isMobile = useResponsive("down", "md");

  const { data: sidebarMenuItems, isSuccess } = useQuery(
    ["sidebarMenu"],
    () => getSidebarMenu(),
    {}
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      sx={{
        width: isOpen ? SIDEBAR_WIDTH : "0",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          backgroundColor: "#000",
          backgroundImage: "none",
        },
      }}
      hideBackdrop
      ModalProps={{ disableEnforceFocus: true }}
      open={isOpen}
    >
      <Box
        sx={{
          mt: { xs: APPBAR_MOBILE, md: APPBAR_DESKTOP },
        }}
      >
        {isSuccess &&
          sidebarMenuItems.map((item, i) => (
            <SidebarMenuItem items={item.items} header={item.header} key={i} />
          ))}
        {komoverseSocialMedia.map((item, i) => (
          <SidebarMenuItem items={item.list} header={item.header} key={i} />
        ))}
      </Box>
    </Drawer>
  );
}

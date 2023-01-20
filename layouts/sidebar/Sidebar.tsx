import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { APPBAR_DESKTOP, APPBAR_MOBILE, SIDEBAR_WIDTH } from "../constant";
import SidebarMenuItems from "./SidebarMenuItem";
import useResponsiveMedia from "@/hooks/useResponsiveMedia";
import { useQuery } from "react-query";
import { getSidebarMenu } from "services/sidebar";

interface SidebarProps {
  isOpen: boolean;
}

const sidebarMenuItems = [
  {
    header: "Mints",
    headerIcon: "mints",
    list: [
      {
        rank: "",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "2 days",
      },
      {
        rank: "",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "2 days",
      },
    ],
  },
  {
    header: "Tournaments",
    headerIcon: "tournaments",
    list: [
      {
        rank: "",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "2 days",
      },
    ],
  },
  {
    header: "Trending",
    headerIcon: "trending",
    list: [
      {
        rank: "#1",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "",
      },
      {
        rank: "#2",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "",
      },
    ],
  },
  {
    header: "Play Now",
    headerIcon: "play-now",
    list: [
      {
        rank: "",
        title: "Komo Chess",
        image: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        duration: "",
      },
    ],
  },
  {
    header: "Community",
    headerIcon: "resource",
    list: [
      {
        icon: "ic:baseline-discord",
        title: "Join our community",
      },
      {
        icon: "ri:facebook-fill",
        title: "Follow us on Facebook",
      },
      {
        icon: "mdi:twitter",
        title: "Follow us on Twitter",
      },
      {
        icon: "mdi:instagram",
        title: "Follow us on Instagram",
      },
      {
        icon: "tabler:speakerphone",
        title: "News",
      },
      {
        icon: "ph:handshake-fill",
        title: "Partnership",
      },
      {
        icon: "ic:outline-school",
        title: "Academy",
      },
    ],
  },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const isMobile = useResponsiveMedia("down", "md");

  const { data } = useQuery(["sidebarMenu"], () => getSidebarMenu(), {});

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
        {sidebarMenuItems &&
          sidebarMenuItems.map((items, i) => (
            <SidebarMenuItems key={i} items={items} />
          ))}
      </Box>
    </Drawer>
  );
}

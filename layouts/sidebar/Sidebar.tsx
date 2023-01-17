import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { APPBAR_DESKTOP, APPBAR_MOBILE, SIDEBAR_WIDTH } from "../constant";
import SidebarMenuItems from "./SidebarMenuItem";

interface SidebarProps {
  isOpen: boolean;
}

const sidebarMenuItems = [
  {
    header: "Mints",
    headerIcon: "RocketLaunchOutlinedIcon",
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
    headerIcon: "EmojiEventsOutlinedIcon",
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
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const theme = useTheme();
  const mediaMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer
      variant={mediaMobile ? "temporary" : "persistent"}
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
          borderRight: "1px solid rgb(45, 45, 45)",
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

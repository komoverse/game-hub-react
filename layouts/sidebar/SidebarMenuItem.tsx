import { ReactNode, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
} from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

interface SidebarMenuItems {
  items: {
    header: string;
    headerIcon: string;
    list: {
      rank?: string;
      title: string;
      image: string;
      duration: string;
    }[];
  };
}

function getIcon(icon: string) {
  switch (icon) {
    case "RocketLaunchOutlinedIcon":
      return <RocketLaunchOutlinedIcon />;
    case "EmojiEventsOutlinedIcon":
      return <EmojiEventsOutlinedIcon />;
    case "TrendingUpOutlinedIcon":
      return <TrendingUpOutlinedIcon />;
    case "SportsEsportsOutlinedIcon":
      return <SportsEsportsOutlinedIcon />;
    case "SchoolOutlinedIcon":
      return <SchoolOutlinedIcon />;
    default:
      break;
  }
}

const SidebarMenuItems = ({ items }: SidebarMenuItems) => {
  return (
    <List
      disablePadding
      sx={{
        borderTop: "1px solid rgb(45, 45, 45)",
      }}
    >
      <ListSubheader component="div">
        <ListItem key="mints" sx={{ py: 2, px: "0" }}>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            {getIcon(items.headerIcon)}
          </ListItemIcon>
          <ListItemText
            primary={items.header}
            primaryTypographyProps={{
              fontWeight: "medium",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          />
        </ListItem>
      </ListSubheader>
      <List>
        {items.list.map((menu, idx) => (
          <ListItem key={menu.title} disablePadding>
            <ListItemButton sx={{ p: "8px 16px 8px 24px" }}>
              {menu.rank && (
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {menu.rank}
                </ListItemIcon>
              )}
              <ListItemAvatar sx={{ minWidth: "40px" }}>
                <Avatar
                  variant="rounded"
                  alt={`image of ${menu.title}`}
                  src={menu.image}
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={menu.title}
                sx={{ maxWidth: "140px" }}
                primaryTypographyProps={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "medium",
                  fontSize: "small",
                }}
              />
              <ListItemSecondaryAction
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontSize: (theme) => theme.typography.caption.fontSize,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                }}
              >
                {menu.duration}
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </List>
  );
};

export default SidebarMenuItems;

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
import Iconify from "@/components/Iconify";
import { sidebarHeader } from "../constants";
import { SidebarMenuItem } from "./types";

const SidebarMenuItem = ({ items, header }: SidebarMenuItem) => {
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
            <Iconify icon={sidebarHeader[header].icon} height={24} width={24} />
          </ListItemIcon>
          <ListItemText
            primary={sidebarHeader[header].title}
            primaryTypographyProps={{
              fontWeight: "medium",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          />
        </ListItem>
      </ListSubheader>
      <List>
        {items.map((menu: any, idx: number) => (
          <ListItem key={`${menu.title}-${idx}`} disablePadding>
            <ListItemButton sx={{ p: "8px 16px 8px 24px" }}>
              {(menu.rank || menu.icon) && (
                <ListItemIcon
                  sx={{
                    minWidth: "40px",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: "medium",
                    fontSize: "small",
                  }}
                >
                  {menu.rank}
                  {menu.icon && (
                    <Iconify icon={menu.icon} height={24} width={24} />
                  )}
                </ListItemIcon>
              )}
              {menu.image && (
                <ListItemAvatar sx={{ minWidth: "40px" }}>
                  <Avatar
                    variant="rounded"
                    alt={`image of ${menu.title}`}
                    src={menu.image}
                    sx={{ width: 24, height: 24 }}
                  />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={menu.title}
                sx={{ maxWidth: "160px" }}
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
        {header === "random_play_now" && (
          <ListItem disablePadding>
            <ListItemButton sx={{ p: "8px 16px 8px 24px" }}>
              <ListItemIcon
                sx={{
                  minWidth: "40px",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "medium",
                  fontSize: "small",
                }}
              >
                <Iconify icon="mdi:dots-horizontal" />
              </ListItemIcon>
              <ListItemText
                primary="Explore all games"
                sx={{ maxWidth: "140px" }}
                primaryTypographyProps={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "medium",
                  fontSize: "small",
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </List>
  );
};

export default SidebarMenuItem;

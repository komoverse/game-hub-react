import { memo, ReactNode } from "react";
import { Popover } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

interface MenuPopoverProps {
  children: ReactNode;
  sx?: object;
}

const MenuPopover = ({
  children,
  sx,
  ...other
}: MenuPopoverProps & $ComponentType<typeof Popover>) => (
  <Popover
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    PaperProps={{
      sx: {
        p: 1,
        width: 200,
        overflow: "inherit",
        ...sx,
      },
    }}
    {...other}
  >
    {children}
  </Popover>
);

export default memo(MenuPopover);

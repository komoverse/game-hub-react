import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsiveMedia(
  query?: string,
  key?: any,
) {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  switch (query) {
    case "up":
      return mediaUp;
    case "down":
      return mediaDown;
    default:
      return false;
  }
}

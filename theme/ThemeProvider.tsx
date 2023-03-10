import { ReactNode, useMemo } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Work_Sans } from "@next/font/google";
import customTypography from "./Typography";

export const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const palette = {
  mode: "dark",
  primary: {
    main: "#32cd32",
  },
};

type ChildrenProps = {
  children?: ReactNode;
};

const ThemeProvider = ({ children }: ChildrenProps) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography: {
        fontFamily: workSans.style.fontFamily,
        ...customTypography,
      },
    }),
    []
  );

  const theme = createTheme(themeOptions as any);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;

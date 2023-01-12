import { red } from "@mui/material/colors";
import { ReactNode, useMemo } from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Work_Sans } from "@next/font/google";

const pallete = {
  primary: {
    main: "#32cd32",
    dark: "#111111",
  },
  error: {
    main: red.A400,
  },
};

export const workSans = Work_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#32cd32",
      dark: "#111111",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: workSans.style.fontFamily,
  },
});

type ChildrenProps = {
  children?: ReactNode;
};

const ThemeProvider = ({ children }: ChildrenProps) => {
  // const themeOptions = useMemo(
  //   () => ({
  //     mode: "dark",
  //     pallete,
  //     typography,
  //   }),
  //   []
  // );

  // const theme = createTheme(themeOptions as any);

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

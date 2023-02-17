import { ReactNode, useMemo } from 'react';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Work_Sans } from '@next/font/google';
import customTypography from './Typography';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

export const workSans = Work_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const palette = {
  mode: 'dark',
  primary: {
    main: '#32cd32',
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
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;

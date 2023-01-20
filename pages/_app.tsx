import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import enTranslations from "locales/en";
import idTranslations from "locales/id";
import cnTranslations from "locales/cn";
import inTranslations from "locales/in";
import ThemeProvider from "@/theme/ThemeProvider";
import createEmotionCache from "@/theme/createEmotionCache";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "store/store";
import "styles/global.scss";
import { ReactQueryDevtools } from 'react-query/devtools';


const clientSideEmotionCache = createEmotionCache();

const resources = {
  en: { messages: enTranslations },
  id: { messages: idTranslations },
  cn: { messages: cnTranslations },
  in: { messages: inTranslations },
};

const i18n: any = i18next.use(initReactI18next);
i18n.init({
  react: {
    wait: true,
  },
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  ns: ["messages"],
  defaultNS: "messages",
  fallbackNS: [],
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Komoverse</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Component {...pageProps} />
            </QueryClientProvider>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

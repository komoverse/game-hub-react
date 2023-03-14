import Head from 'next/head';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import enTranslations from 'locales/en';
import idTranslations from 'locales/id';
import zhTranslations from 'locales/zh';
import hiTranslations from 'locales/hi';
import ThemeProvider from '@/theme/ThemeProvider';
import store from 'store/store';
import 'styles/global.scss';
import Layout from '@/layouts/Layout';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const resources = {
  en: { messages: enTranslations },
  id: { messages: idTranslations },
  zh: { messages: zhTranslations },
  hi: { messages: hiTranslations },
};

const i18n: any = i18next.use(initReactI18next);
i18n.init({
  react: {
    useSuspense: true,
  },
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  ns: ['messages'],
  defaultNS: 'messages',
  fallbackNS: [],
});

const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <Head>
        <title>Komoverse</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV === 'development' && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  );
}

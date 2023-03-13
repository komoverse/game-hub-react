import Head from 'next/head';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from '@/theme/ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';

import store from 'store/store';
import 'styles/global.scss';
import Layout from '@/layouts/Layout';
import i18n from '@/helper/i18n';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

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

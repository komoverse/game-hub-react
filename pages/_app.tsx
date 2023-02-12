import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import enTranslations from "locales/en";
import idTranslations from "locales/id";
import zhTranslations from "locales/zh";
import hiTranslations from "locales/hi";
import ThemeProvider from "@/theme/ThemeProvider";
import createEmotionCache from "@/theme/createEmotionCache";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "store/store";
import "styles/global.scss";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";

import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)

const connectors = [
  new InjectedConnector({
    chains,
    options: {
      name: 'Komoverse Wallet',
      shimDisconnect: true,
      // @ts-ignore
      appLogoUrl: 'https://avatars.githubusercontent.com/u/102501734?s=200&v=4'
    }
  }),
  new MetaMaskConnector({
    chains,
    options: {
      shimDisconnect: true,
      shimChainChangedDisconnect: true,
      // @ts-ignore
      appLogoUrl: 'https://raw.githubusercontent.com/MetaMask/brand-resources/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox.svg',
    }
  }),
  new CoinbaseWalletConnector({
    // @ts-ignore
    options: {
      // jsonRpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId',
      appLogoUrl: 'https://avatars.githubusercontent.com/u/1885080?s=200&v=4',
      darkMode: true,
    },
  }),
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true,
      // @ts-ignore
      appLogoUrl: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/c6e9d7ca2e81d4094e83849f560a024962a7987a/Icon/Blue%20(Default)/Icon.svg'
    },
  }),
]

const client = createClient({
  autoConnect: true,
  webSocketProvider,
  provider,
  connectors,
  logger: {
    warn: (message) => console.warn(message),
  },
})

const resources = {
  en: { messages: enTranslations },
  id: { messages: idTranslations },
  zh: { messages: zhTranslations },
  hi: { messages: hiTranslations },
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

const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { pathname } = useRouter()

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
              <WagmiConfig client={client}>
                {pathname !== '/signin' ? (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                ) : (
                  <Component {...pageProps} />
                )}
              </WagmiConfig>
            </QueryClientProvider>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

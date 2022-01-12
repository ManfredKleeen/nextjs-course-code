import '../styles/globals.css'

import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';

import type { AppProps } from 'next/app'
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import createEmotionCache from '../components/lib/create-emotion-cache';
import theme from '../styles/theme';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>NextJs Tutorial</title>
      </Head>
      <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

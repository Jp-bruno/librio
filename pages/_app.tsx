/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import TopBar from '../components/TopBar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cão Carioca</title>
        <meta name="description" content="Cão Carioca App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

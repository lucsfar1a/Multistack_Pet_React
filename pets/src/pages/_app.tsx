import './styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from './themes/tema';
import Header from './components/Header/header';


function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <ThemeProvider theme={tema}>
    <Header />
   <Component {...pageProps} />
  </ThemeProvider>
  ) 
}

export default MyApp

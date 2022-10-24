import Head from 'next/head';
import { Provider } from 'react-redux';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';

import store from '@/redux/store';
import { MESSAGES } from '@/constants';

import './styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>{MESSAGES.title}</title>
        <meta name="description" content="NHL Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Flex as="main" direction="column" w="100%" alignItems="center">
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

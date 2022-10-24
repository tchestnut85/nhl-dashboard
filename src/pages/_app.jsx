import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';

import store from '@/redux/store';

import './styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

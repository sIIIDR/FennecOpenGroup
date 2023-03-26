import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';

import { App } from './components/App';
import { theme } from './styles/theme';

import '@fontsource/roboto-slab';
import '@fontsource/roboto-mono';
import './styles/main.scss';

ReactDOM.render(
  <CookiesProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </CookiesProvider>,
  document.getElementById('root'),
);

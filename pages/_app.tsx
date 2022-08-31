import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';

function MyApp({ Component, pageProps }: AppProps) {

  const store = setupStore();

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;

// src/pages/_app.js
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // store.js'den store'u içe aktarıyoruz
import '../styles/globals.css'; // Global CSS

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> {/* Store'u Provider ile sarmalıyoruz */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

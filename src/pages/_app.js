// src/pages/_app.js
import { Provider } from 'react-redux';
import store from '../redux/store';  // Redux store'u import ettik
import '../styles/globals.css'; // Global CSS'leri import ettik

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

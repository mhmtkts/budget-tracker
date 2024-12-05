// src/pages/_app.js
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout/Layout'; // Layout'u ekledik
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Eğer sayfa özel bir Layout tanımlamışsa onu uygula, aksi halde varsayılan Layout'u kullan
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;

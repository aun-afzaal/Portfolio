import Layout from "../components/Layout";
import "../styles/globals.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

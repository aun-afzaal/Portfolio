import Layout from "../components/Layout";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import "../styles/globals.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: { colorPrimary: "#3b82f6", colorBgBase: "#050f1e", colorTextBase: "#f0f6ff", borderRadius: 12 } }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}

export default MyApp;

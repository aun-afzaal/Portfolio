import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => (
  <main
    style={{
      background: "var(--navy-900)",
      color: "var(--white-100)",
      minHeight: "100vh",
      backgroundImage: "url('/site-bg.svg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    <Head>
      <title>Muhammad Aun | Software Engineer</title>
      <meta name="description" content="Muhammad Aun – Software Engineer building scalable full-stack applications." />
      <meta name="google-site-verification" content="DoPaRlA8gAeXq5hyUwDX3i0nOqhGl59jZfJ6z0-sm70" />
      <meta name="author" content="Muhammad Aun" />
      <meta name="theme-color" content="#3b82f6" />
      {/* Sora font loaded via CSS @import to avoid build-time network fetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>

    <TopLeftImg />
    <Nav />
    <Header />

    {/* bottom padding for mobile nav bar */}
    <div>
      {children}
    </div>
  </main>
);

export default Layout;

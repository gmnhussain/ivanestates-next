import Script from "next/script";
// import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Script src="https://kit.fontawesome.com/6219da6e02.js" />
      <Component {...pageProps} />
    </>
  );
}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import "../styles/font/icofont.min.css";
import "../styles/section/_global-style.scss";
import Head from "next/head";
import Social from "./inner/Social";
import Aos from "aos";
import "aos/dist/aos.css";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout || Fragment;
  const router = useRouter();
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-WXNBYYH45D" });
  }, []);
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("776091353545037"); // facebookPixelIds
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Social />
      </Layout>
    </>
  );
}

export default MyApp;

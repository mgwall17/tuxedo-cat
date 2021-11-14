import '../styles/globals.css'
import { ParallaxProvider } from "react-scroll-parallax";
import { MDXProvider } from "@mdx-js/react";

function MyApp(props) {
  const { Component, pageProps} = props;
  return (
    <MDXProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </MDXProvider>
  );
}

export default MyApp

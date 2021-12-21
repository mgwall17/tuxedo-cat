import Head from "next/head";
import Nav from "../components/Nav.mdx"
import ParallaxOne from "../components/ParallaxOne";
import ParallaxTwo from "../components/ParallaxTwo";
import Empower from "../content/Empower.mdx";
import OurServices from "../content/OurServices.mdx";
import OurTools from "../content/OurTools.mdx";
import GettingStarted from "../content/GettingStarted.mdx";
import Logo from "../public/logo.js";
import Footer from "../content/Footer.mdx"


export default function Home() {
  return (
    <div>
      <Head>
        <title>CyVerse</title>
        <meta name="description" content="Digital brochure for CyVerse.org" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="container">
        <div style={{ marginTop: "10vh" }} id="empower">
          <h1 className="display-2 text-center mb-4">
            <a href="https://cyverse.org" alt="CyVerse">
              <Logo />
            </a>
          </h1>
          <Empower />
        </div>
      </div>
      <ParallaxOne />
      <div className="container">
        <div>
          <OurTools />
        </div>
      </div>
      <ParallaxTwo />
      <div className="container">
        <div>
          <OurServices />
          <GettingStarted />
        </div>
        <Footer />
      </div>
    </div>
  );
}

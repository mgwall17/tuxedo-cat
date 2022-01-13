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
        <title>CyVerse | Overview</title>
        <meta name="description" content="Digital brochure for CyVerse.org" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="container-fluid">
        <div id="empower">
          <div className="justify-content-center mb-2 mt-4 mt-sm-5 ">
            <div style={{ maxWidth: "500px", minWidth: "200px", margin:"auto" }}>
              <a
                href="https://cyverse.org"
                alt="CyVerse"
                style={{ maxWidth: "500px", minWidth: "200px" }}
              >
                <Logo />
              </a>
            </div>
          </div>
          <Empower />
        </div>
      </div>
      <ParallaxOne />
      <div className="container-fluid">
        <div>
          <OurTools />
        </div>
      </div>
      <ParallaxTwo />
      <div className="container-fluid">
        <div>
          <OurServices />
          <GettingStarted />
        </div>
        <Footer />
      </div>
    </div>
  );
}

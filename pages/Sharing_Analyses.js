import Head from "next/head";
import Image from "next/image";
import ParallaxOne from "../components/ParallaxOne";
import ParallaxTwo from "../components/ParallaxTwo";
import Empower from "../content/Empower.mdx";
import OurServices from "../content/OurServices.mdx";
import OurTools from "../content/OurTools.mdx";
import GettingStarted from "../content/GettingStarted.mdx";
import Logo from "../public/logo.js";
import Footer from "../content/Footer.mdx";
import Header from "../components/Header.mdx";

export default function Data() {
  return (
    <div>
      <Head>
        <title>CyVerse | Sharing Analyses</title>
        <meta name="description" content="Digital brochure for CyVerse.org" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <a
          href="https://learning.cyverse.org/projects/vice/en/latest/user_guide/sharing.html"
          target="_blank" rel="noreferrer"
        >
          <img
            src="/images/Share.jpg"
            className="img-fluid border rounded-3 shadow mb-4"
            alt="Share"
            loading="lazy"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

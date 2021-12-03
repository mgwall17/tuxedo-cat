import Head from "next/head";
import Image from "next/image";
import ParallaxOne from "../components/ParallaxOne";
import ParallaxTwo from "../components/ParallaxTwo";
import Empower from "../content/Empower.mdx";
import OurServices from "../content/OurServices.mdx";
import OurTools from "../content/OurTools.mdx";
import GettingStarted from "../content/GettingStarted.mdx";
import Testimonials from "../content/Testimonials.mdx";
import SideNav from "../components/sideNav.js";
import Logo from "../public/logo.js";

import WhatIs from "../content/WhatIs.mdx"

export default function Home() {
  return (
    <div>
      <Head>
        <title>CyVerse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-md" style={{ marginTop: "3vh" }}>
        <h1 className="display-2 text-center mb-4">
          <a href="https://cyverse.org" alt="CyVerse">
            <Logo />
          </a>
        </h1>
        <Empower />
        <WhatIs />
      </div>
      <ParallaxOne />
      <div className="container-md">
        <OurServices />
      </div>
      <ParallaxTwo />
      <div className="container-md">
        <OurTools />
        <GettingStarted />
      </div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cyverse.org info@cyverse.org
        </a>
      </footer>
    </div>
  );
}

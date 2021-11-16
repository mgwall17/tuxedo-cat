import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image"



const ParallaxOne = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: "../public/images/stat.png",
        amount: 0.4,
      },
      {
        image: "../public/images/stat.png",
        amount: 0.5,
      },
    ]}
    style={{
      height: "500px",
    }}
  >
    <h1>Banner Children</h1>
  </ParallaxBanner>
);

export default ParallaxOne

import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

const ParallaxTest = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: "https://source.unsplash.com/random/800x600",
        amount: 0.4,
      },
      {
        image: "https://source.unsplash.com/random/800x600",
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

export default ParallaxTest

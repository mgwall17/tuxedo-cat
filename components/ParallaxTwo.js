import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

const ParallaxOne = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/Two_Layer_Two.png",
        amount: -0.5,
      },
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/Two_Layer_One.png",
        amount: 0.5,
      },
    ]}
    style={{
      height: "300px",
    }}
  >
    <h1>Banner Children</h1>
  </ParallaxBanner>
);

export default ParallaxOne;

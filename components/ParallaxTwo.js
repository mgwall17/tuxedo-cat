import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

const ParallaxTwo = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/Two_Layer_One.png",
        amount: -0.3,
      },
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/Two_Layer_Two.png",
        amount: 0.3,
      },
    ]}
    style={{
      height: "300px",
    }}
  >
    <h1>Banner Children</h1>
  </ParallaxBanner>
);

export default ParallaxTwo;

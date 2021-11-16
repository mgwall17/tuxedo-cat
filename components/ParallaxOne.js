import { ParallaxBanner } from "react-scroll-parallax";



const ParallaxOne = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/One_Layer_Two.png",
        amount: -0.3,
      },
      {
        image:
          "https://raw.githubusercontent.com/mgwall17/tuxedo-cat/main/public/images/One_Layer_One.png",
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

export default ParallaxOne

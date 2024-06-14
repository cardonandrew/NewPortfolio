// import "./home.css";
// import homepage from "../img/homepage.mp4";
// import mobilehomepage from "../img/mobilehomepage.mp4";
// import Button from "@mui/material/Button";
// import { AutoplayCarousel } from "./index.js";

// const Home = () => {
//   return (
//     <div id="home">
//       <div id="video-view">
//         <video id="homevid" src={homepage} muted autoPlay loop></video>
//         <Button id="learn-btn" variant="contained">
//           Learn More
//         </Button>
//       </div>
//       <div id="mobile-video-view">
//         <video
//           id="mobile-homevid"
//           src={mobilehomepage}
//           muted
//           autoPlay
//           loop
//         ></video>
//         <Button id="learn-btn-2" variant="contained">
//           Learn More
//         </Button>
//       </div>
//       <AutoplayCarousel />
//     </div>
//   );
// };

// export default Home;

import "./projects.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";

const Home = () => {
  return (
    <div className="home">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer factor={1} offset={0} speed={-0.8}>
          <div class="animation_layer parallax" id="par4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.65}>
          <div class="animation_layer parallax" id="par5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.95}>
          <div class="animation_layer parallax" id="par6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.15}>
          <div class="animation_layer parallax" id="par7"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.0}>
          <div class="animation_layer parallax" id="par8"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.1}>
          <div class="animation_layer parallax" id="par9"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.15}>
          <div class="animation_layer parallax" id="par10"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.95}>
          <div class="animation_layer parallax" id="par11"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.2}>
          <div class="animation_layer parallax" id="par12"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.1}>
          <div class="animation_layer parallax" id="par13"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.95}>
          <div class="animation_layer parallax" id="par14"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.05}>
          <div class="animation_layer parallax" id="par15"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.55}>
          <div class="animation_layer parallax" id="par16"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.9}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;

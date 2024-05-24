import "./index.css";
import homepage from "../img/homepage.mp4";
import mobilehomepage from "../img/mobilehomepage.mp4";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div id="home">
      <div id="video-view">
        <video id="homevid" src={homepage} muted autoPlay loop></video>
        <Button id="learn-btn" variant="contained">
          Learn More
        </Button>
      </div>
      <div id="mobile-video-view">
        <video
          id="mobile-homevid"
          src={mobilehomepage}
          muted
          autoPlay
          loop
        ></video>
        <Button id="learn-btn-2" variant="contained">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Home;

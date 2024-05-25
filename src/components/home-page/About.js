import "./about.css";
// import aboutTitle from "../img/about-title.svg";
import aboutWords from "../img/aboutwords.png";
// import aboutPic from "../img/about-pic.jpg";

const About = () => {
  return (
    <div id="about">
      <div id="about-imgs">
        <img id="about-words" alt="about-words" src={aboutWords} />
      </div>
    </div>
  );
};

export default About;

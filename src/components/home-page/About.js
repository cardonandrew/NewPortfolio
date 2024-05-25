import "./index.css";
import aboutTitle from "../img/about-title.svg";
import aboutWords from "../img/aboutwords.png";

const About = () => {
  return (
    <div id="about">
      <img className="section-title" alt="about-title" src={aboutTitle} />
      <img id="about-words" alt="about-words" src={aboutWords} />
    </div>
  );
};

export default About;

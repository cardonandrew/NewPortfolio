import "./home-page/index.css";
import {
  About,
  Projects,
  Home,
  Contact,
  AutoplayCarousel,
} from "./home-page/index";

const Main = () => {
  return (
    <div id="main">
      <Home />
      <AutoplayCarousel />
      <hr className="style4" />
      <About />
      <hr className="style4" />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;

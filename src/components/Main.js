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
      <hr />
      <Projects />
      <hr />
      <Contact />
    </div>
  );
};

export default Main;

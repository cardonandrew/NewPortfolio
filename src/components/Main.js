import "./comp.css";
import { About, Projects, Projects2, Home, Contact } from "./home-page/index";

const Main = () => {
  return (
    <div id="main">
      <Home />
      <hr className="style4" />
      <About />
      <Projects />
      <hr className="style3" />
      <Projects2 />
      <Contact />
    </div>
  );
};

export default Main;

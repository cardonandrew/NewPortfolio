import "./index.css";
import site3 from "../img/pcsite.jpeg";
import site1 from "../img/solequest.jpeg";
import site2 from "../img/twitter.jpeg";
import projectsTitle from "../img/projects.svg";

const Projects = () => {
  // function parallax() {
  //   var s = document.getElementById("floater-2");
  //   var yPos = 0 - window.scrollY / 3;
  //   s.style.top = 50 + yPos + "%";
  // }

  // window.addEventListener("scroll", function () {
  //   parallax();
  // });

  return (
    <div id="projects">
      <img className="section-title" alt="projects-title" src={projectsTitle} />
      <div id="about-content">
        <div id="card-container">
          <div className="card" id="card-1"></div>
          <div className="card" id="card-2"></div>
          <div className="card" id="card-3"></div>
        </div>
        <div id="img-container">
          <img className="sites" id="site-1" src={site1} alt="site1" />
          <img className="sites" id="site-2" src={site2} alt="site2" />
          <img className="sites" id="site-3" src={site3} alt="site3" />
        </div>
      </div>
      {/* <div className="object-in-3d float-center" id="floater-2"></div> */}
    </div>
  );
};

export default Projects;

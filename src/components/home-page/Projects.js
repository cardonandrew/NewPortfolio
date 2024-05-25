import "./projects.css";
import site3 from "../img/pcsite.jpeg";
import site1 from "../img/solequest.jpeg";
import site2 from "../img/twitter.jpeg";
import projectsTitle from "../img/projects.svg";

const Projects = () => {
  return (
    <div id="projects">
      <img className="section-title" alt="projects-title" src={projectsTitle} />
      <div id="projects-content">
        <div id="card-container">
          <div className="card" id="card-1"></div>
          <div className="card" id="card-2"></div>
          <div className="card" id="card-3"></div>
        </div>
        <img
          id="scrollgif"
          alt="scrollgif"
          src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"
        />
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

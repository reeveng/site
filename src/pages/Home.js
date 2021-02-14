import React, { useEffect } from 'react';
import { ReactComponent as Working } from "../assets/vector/working.svg"
import { ReactComponent as ArrowRight } from "../assets/vector/arrowRight.svg"
import ProjectCard from '../components/ProjectCard';
import { projects } from "../assets/json/projects";
import { useWindowSize } from '../components/OnResize';

let moveSpeed;


const onScrollHomepage = () => {
  let homepageDiv = document.getElementById("homepage");
  homepageDiv.addEventListener("wheel", (event) => {
    moveSpeed = Math.floor(window.innerWidth / 100)
    moveSpeed = moveSpeed <= 10 ? 10 : moveSpeed;
    if (event.deltaY < 0) {
      homepageDiv.scrollLeft -= moveSpeed;
    }
    else if (event.deltaY > 0) {
      homepageDiv.scrollLeft += moveSpeed;
    }
    document.getElementById("arrowRight").classList.add("visible");
  })
}


const Home = () => {
  const [width,] = useWindowSize();
  projects.sort((a, b) => new Date(b.date.year, b.date.month - 1) - new Date(a.date.year, a.date.month - 1));
  window.addEventListener('scroll', function (e) {
  });

  useEffect(() => {
    onScrollHomepage()
  }, []);


  return (
    <>
      {/* <Nav smallNav /> */}

      <div id="homepage">

        <div className="pane" id="home">
          <div className="content">
            <h1 className="title">
              Reeven
            </h1>
            <div className="content-body" style={{ display: "flex", flexDirection: "column" }}>
              <div id="working-svg">
                <Working id="working" style={{ maxWidth: width - 20 }} />
              </div>
              <ArrowRight id="arrowRight" style={{ width: 30, height: 30, marginTop: "5%" }} />
            </div>
          </div>
        </div>
        <div className="pane" id="about">
          <div className="content">
            <h1 className="title">
              About
            </h1>
            <div className="about-text">
              <p className="about-text-intro">
                Hi there! I am <span className="highlight">Reeven</span>, a developer from Belgium.<br />
                <br />
                I thoroughly enjoy solving enigmas, learning, <a href="https://lichess.org">chess</a>, exercising and honing my current set of skills.<br />
                <br />
                One of my key attributes is that I speak the language of developers with a users perspective in mind.<br />
              </p>

              {/* 2. Significant personal achievements or awards
              3. Personal details: goals, hobbies, ...

              I am a young designer and developer from Belgium.
              I want to create a smile on the face of the people around me.
              I enjoy solving enigmas and problems of any kind.
              I love to travel to distant countries. */}

            </div>
            {/* <div className="social-section">
              <h2 className="social-title">
                Socials
              </h2>
              <div className="social-content">
                <div className="social-row-mobile">
                  <div className={`social-github`}>
                    <a href="https://github.com/reeveng">
                      <img alt="@reeveng on github" width="32px" height="32px" src={socialMedia["github"]} />
                    </a>
                  </div>
                  <div className={`social-gmail`}>
                    <a href="mailto:govaertreeven@gmail.com">
                      <img alt="govaertreeven@gmail.com is my emailaddress" width="32px" height="32px" src={socialMedia["gmail"]} />
                    </a>
                  </div>
                </div>
                <div className="social-row-mobile">
                  <div className={`social-dribbble`}>
                    <a href="https://dribbble.com/reeveng">
                      <img alt="reeveng on dribbble" width="32px" height="32px" src={socialMedia["dribble"]} />
                    </a>
                  </div>
                  <div className={`social-linkedin`}>
                    <a href="https://www.linkedin.com/in/rgovaert/">
                      <img alt="rgovaert on linkedin" width="32px" height="32px" src={socialMedia["linkedin"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="pane" id="projects">
          <div className="content">
            <h1 className="title" style={{ maxWidth: width }}>
              Projects
            </h1>
            <div className="project-list">
              {projects.map((project, index) => {
                return (<ProjectCard imgSrc={project.img_src} projectId={project.id} key={project.id} cardTitle={project.title} imgAlt={project.img_alt} index={index} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
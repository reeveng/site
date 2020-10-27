import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import { ReactComponent as Working } from "../assets/vector/working.svg"
import ProjectCard from '../components/ProjectCard';
import { projects } from "../assets/json/projects";
import { socialMedia } from "./Project"

const onScrollHomepage = () => {
  let homepageDiv = document.getElementById("homepage");
  homepageDiv.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      homepageDiv.scrollLeft -= 25;
    }
    else if (event.deltaY > 0) {
      homepageDiv.scrollLeft += 25;
    }
  })
}

const Home = () => {
  projects.sort((a, b) => new Date(b.date.year, b.date.month - 1) - new Date(a.date.year, a.date.month - 1));
  window.addEventListener('scroll', function (e) {
  });
  useEffect(() => {
    onScrollHomepage()
  }, []);
  return (
    <>
      <Nav smallNav />
      <div id="homepage">
        <div className="pane" id="home">
          <div className="content">
            <h1 className="title">
              I am Reeven
            </h1>
            <div className="content-body">
              <div id="working-svg">
                <Working id="working" />
              </div>
            </div>
          </div>
        </div>
        <div className="pane" id="about">
          <div className="content">
            <h1 className="title">
              About
            </h1>
            <div className="about-text">
              <div className="about-text-intro">
                I am a Developer and Creative Designer born and raised (mainly) in Belgium.
                As a recent graduate I am quite interested in learning and developing / honing my current set of skills.
                I speak the language of developers with a users perspective in mind.
                I love doing UX/UI, Branding, photography, Graphic Design, ... Let's just say I am a studio on my on.
              </div>

              {/* 2. Significant personal achievements or awards
              3. Personal details: goals, hobbies, ...

              I am a young designer and developer from Belgium.
              I want to create a smile on the face of the people around me.
              I enjoy solving enigmas and problems of any kind.
              I love to travel to distant countries. */}

            </div>
            <div className="social-section">
              <h2 className="social-title">
                Socials
              </h2>
              <div className="social-content">
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
          </div>
        </div>
        <div className="pane" id="projects">
          <div className="content">
            <h1 className="title">
              Projects
            </h1>
            <div className="project-list">
              {projects.map(project => {
                return (<ProjectCard imgSrc={project.img_src} projectId={project.id} key={project.id} cardTitle={project.title} imgAlt={project.img_alt} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
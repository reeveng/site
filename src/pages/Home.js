import React from 'react';
import Nav from '../components/Nav';
import { ReactComponent as Working } from "../assets/vector/working.svg"
// import Badge from '../components/Badge';
import ProjectCard from '../components/ProjectCard';
import { projects } from "../assets/json/projects";

const Home = () => {
  projects.sort((a, b) => new Date(b.date.year, b.date.month - 1) - new Date(a.date.year, a.date.month - 1));
  window.addEventListener('scroll', function (e) {
  });
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
              {/* <div className="badges">
              <Badge className="badge--line">Developer</Badge>
              <Badge className="badge--line">Daredevil</Badge>
              <Badge className="badge--line">Designer</Badge>
            </div> */}
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
                <br />
                <br />

              </div>

              {/* 2. Significant personal achievements or awards
              3. Personal details: goals, hobbies, ...

              I am a young designer and developer from Belgium.
              I want to create a smile on the face of the people around me.
              I enjoy solving enigmas and problems of any kind.
              I love to travel to distant countries. */}

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
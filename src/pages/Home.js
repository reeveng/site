import React from 'react';
import Nav from '../components/Nav';
import { ReactComponent as Working } from "../assets/vector/working.svg"
import Badge from '../components/Badge';
import ProjectCard from '../components/ProjectCard';
import { projects } from "../assets/json/projects";

const Home = () => {
  projects.sort((a, b) => new Date(b.date.year, b.date.month - 1) - new Date(a.date.year, a.date.month - 1));
  return (
    <>
      <Nav />
      <div id="homepage">
        <div className="pane" id="home">
          <div className="content">
            <h1 className="title">
              I am Reeven
            </h1>
            <div id="working-svg">
              <Working />
            </div>
            <div className="badges">
              <Badge className="badge--line">Developer</Badge>
              <Badge className="badge--line">Daredevil</Badge>
              <Badge className="badge--line">Designer</Badge>
            </div>
          </div>
        </div>
        <div className="pane" id="about">
          <div className="content">
            <h1 className="title">
              About
            </h1>
            <div className="about-text">
              I am a young designer and developer from Belgium.
              <br />I want to create a smile on the face of the people around me.
              <br />I enjoy solving enigmas and problems of any kind.
              <br />I love to travel to distant countries.
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
                return (<ProjectCard imgSrc={project.img_src} key={project.id} cardTitle={project.title} imgAlt={project.img_alt} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
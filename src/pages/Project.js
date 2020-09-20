import React from 'react';
import Nav from '../components/Nav';
import { projects } from "../assets/json/projects";


const Project = () => {
  let projectId = parseInt(window.location.href.split("/")[4])
  return (
    <div id="p-project">
      <Nav smallNav />
      <div className="p-project__container">
        <div className="p-project__card">{projects.map((project) => {
          if (project.id === projectId) {
            console.log(project)
            return (
              <div key={projectId}>
                <div className="p-project__header">
                  <div className="p-project__header-image__container">
                    <img
                      className="p-project__header-image"
                      src={project.img_src}
                      alt={project.img_alt}
                    />
                  </div>

                  <div className="p-project__header-title">
                    {project.title}
                  </div>

                  <div className="p-project__header-subtitle">
                    {project.subtitle}
                  </div>
                </div>
                <div className="p-project__body">
                  {project.content}
                </div>
              </div>
            )
          }
          return "";
        })}</div>
      </div>
    </div>
  );
}

export default Project;
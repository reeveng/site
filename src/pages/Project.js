import React from 'react';
import Nav from '../components/Nav';
import { projects } from "../assets/json/projects";
import Github from "../assets/vector/socialMedia/github.svg"
import Gmail from "../assets/vector/socialMedia/gmail.svg"

export const socialMedia = {
  github: Github,
  gmail: Gmail,
  mail: Gmail,
};

const Project = () => {
  console.log(socialMedia["github"])
  let projectId = parseInt(window.location.href.split("/")[4])
  return (
    <div id="p-project">
      <Nav smallNav />
      <div className="p-project__container">
        <div className="p-project__card">{projects.map((project) => {
          let projectStartDate = new Date(project.date.year, project.date.month, project.date.day);
          let projectStartDateFormatted = `${projectStartDate.getDate().toString().padStart(2, '0')} / ${(projectStartDate.getMonth() + 1).toString().padStart(2, '0')} / ${projectStartDate.getFullYear()}`;
          if (project.id === projectId) {
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
                    {projectStartDateFormatted}
                  </div>
                </div>
                <div className="p-project__body">
                  {project.content.map((string, index) => { return (<div key={index}>{string}</div>) })}
                  <div className="p-project__socials">
                    {project.social_media.map((social) => {
                      return <div key={`${social.id}`} className={`social-${social.name.toLowerCase()}`}>
                        <a href={social.link}>
                          <img alt="" width="48px" height="48px" src={socialMedia[social.name.toLowerCase()]} />
                        </a>
                      </div>
                    })}
                  </div>
                </div>

              </div>
            )
          }
          return "";
        })}</div>
      </div>
    </div >
  );
}

export default Project;
import React, { useState } from 'react';
import Modal from './Modal';
import { useWindowSize } from './OnResize';
import { projects } from "../assets/json/projects";
import { socialMedia } from './Icons';

const ProjectCard = ({ children, className, imgAlt, imgSrc, projectId, cardTitle, index }) => {
  const [width, height] = useWindowSize();

  const [state, setState] = useState(false);

  const showModal = () => {
    setState({ show: true });
  }

  const hideModal = () => {
    setState({ show: false });
  }

  return (
    <>
      <Modal show={state.show} handleClose={hideModal} >
        {
          projects.map((project) => {
            let projectStartDate = new Date(project.date.year, project.date.month, project.date.day);
            let projectStartDateFormatted = `${projectStartDate.getDate().toString().padStart(2, '0')} / ${(projectStartDate.getMonth() + 1).toString().padStart(2, '0')} / ${projectStartDate.getFullYear()}`;
            if (project.id === projectId) {
              return (
                <div key={projectId}>
                  <img
                    className="p-project__header-image"
                    src={project.img_src}
                    alt={project.img_alt}
                    height={(height / 5) > width ? width : (height / 5)}
                  />
                  <h1 className="p-project__header-title">
                    {project.title}
                  </h1>
                  <h4 className="p-project__header-subtitle">
                    {projectStartDateFormatted}
                  </h4>

                  <div className="p-project__body">
                    {project.content.map((string, index) => { return (<p key={index}>{string}</p>) })}
                    <h2 className="p-project__socials__title">Socials</h2>
                    <div className="p-project__socials">
                      {project.social_media.map((social) => {
                        return <div key={`${social.id}`} className={`social-${social.name.toLowerCase()}`}>
                          <a href={social.link}>
                            <img alt={social.name.toLowerCase()} width="48px" height="48px" src={socialMedia[social.name.toLowerCase()]} />
                          </a>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              )
            }
            return "";
          })}
      </Modal>
      <div onClick={showModal} className={`${className ? className : ""} card project-${projectId}`}>
        <img className="topImg" src={imgSrc} alt={imgAlt} height={height / 3}></img>
        <div className="card-title">{cardTitle}</div>
        {children}
      </div>
    </>
  );
}

export default ProjectCard;
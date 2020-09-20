import React from 'react';

const ProjectCard = ({ children, className, imgAlt, imgSrc, cardTitle, projectId }) => {
  return (
    <div className={`${className} card`} onClick={() => { window.location.href = `/projects/${projectId}` }}>
      <img className="topImg" src={imgSrc} alt={imgAlt}></img>
      <div className="card-title">{cardTitle}</div>
      { children}
    </div >
  );
}

export default ProjectCard;
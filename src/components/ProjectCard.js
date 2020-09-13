import React from 'react';


const ProjectCard = ({ children, className, imgAlt, imgSrc, cardTitle }) => {
  return (
    <div className={`${className} card`}>
      <img className="topImg" src={imgSrc} alt={imgAlt}></img>
      <div className="card-title">{cardTitle}</div>
      {children}
    </div>
  );
}

export default ProjectCard;
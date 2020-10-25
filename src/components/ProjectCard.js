import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ children, className, imgAlt, imgSrc, cardTitle, projectId }) => {
  return (
    <Link to={`/projects/${projectId}`}>
      <div className={`${className} card`}>
        <img className="topImg" src={imgSrc} alt={imgAlt}></img>
        <div className="card-title">{cardTitle}</div>
        {children}
      </div >
    </Link>
  );
}

export default ProjectCard;
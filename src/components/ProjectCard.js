import React from 'react';
import {Redirect} from "react-router-dom"

const ProjectCard = ({ children, className, imgAlt, imgSrc, cardTitle, projectId }) => {
  return (
    <div className={`${className} card`} onClick={()=> {return <Redirect to={`/projects/${projectId}`} />}}>
      <img className="topImg" src={imgSrc} alt={imgAlt}></img>
      <div className="card-title">{cardTitle}</div>
      {children}
    </div>
  );
}

export default ProjectCard;
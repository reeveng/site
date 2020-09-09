import React from 'react';
import Nav from '../components/Nav';
import { ReactComponent as Working } from "../assets/vector/working.svg"
import Badge from '../components/Badge';

const Home = () => {

  return (
    <>
      <Nav />
      <div id="homepage">
        <div className="pane">
          <div className="content">
            <h1 className="title">
              I am Reeven
            </h1>

            <div>
              <Working alt="hey" height="500px" id="working-svg" />
            </div>
            <div className="badges">
              <Badge className="badge--line">Developer</Badge>
              <Badge className="badge--line">Daredevil</Badge>
              <Badge className="badge--line">Designer</Badge>
            </div>
          </div>
        </div>
        <div className="pane">
          <div className="content">
            <h1 className="title">
              About
            </h1>
            <div className="about-text">
              I am a young inspired and inspiring designer and developer from Belgium.
            <br />I want to create a smile on the face of my employer and other contractors by giving them added value in ICT and
            of my girlfriend and of the people around me because they are important for me.
            <br />I enjoy solving enigmas and problems of any kind. I love to travel to distant countries.
            </div>
          </div>
        </div>
        <div className="pane">
          <div className="content">
            <h1 className="title">
              Projects
            </h1>

          </div>
        </div>
      </div>
    </>
  );

}



export default Home;
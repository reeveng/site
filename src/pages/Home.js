import React, { useEffect } from 'react';
import { ReactComponent as Working } from "../assets/vector/working.svg"
import { ReactComponent as ArrowRight } from "../assets/vector/arrowRight.svg"
import { ReactComponent as ArrowLeft } from "../assets/vector/arrowLeft.svg"
import ProjectCard from '../components/ProjectCard';
import { projects } from "../assets/json/projects";
import { useWindowSize } from '../components/OnResize';

let moveSpeed = 0;
let firstTime = true;
let nr = 0;

const onScrollHomepage = () => {
  let homepageDiv = document.getElementById("homepage");
  homepageDiv.addEventListener("wheel", (event) => {
    if (nr > 1) {
      console.log();
      if (firstTime) {
        moveSpeed = Math.floor(window.innerWidth / 100);
        if (window.innerWidth > 900) {
          if (moveSpeed <= 37) {
            moveSpeed = 37;
          }
        } else {
          moveSpeed = moveSpeed <= 10 ? 10 : moveSpeed;
        }
        firstTime = false;
        return;
      }
      nr = 0;

      if (event.deltaY < 0) {
        homepageDiv.scrollLeft -= moveSpeed;
        return;
      }
      if (event.deltaY > 0) {
        homepageDiv.scrollLeft += moveSpeed;
        return;
      }
    }
    nr++;
    arrows();
    return;
  });
}

let arrows = () => {
  let home = Math.abs(document.getElementById("home").getBoundingClientRect().x);
  let about = Math.abs(document.getElementById("about").getBoundingClientRect().x);
  let projects = Math.abs(document.getElementById("projects").getBoundingClientRect().x);
  let closest = Math.min(home, about, projects);
  if (closest === home) {
    document.getElementById("arrowLeft").classList.add("invisible");
    return;
  }
  if (closest === about) {
    document.getElementById("arrowRight").classList.remove("invisible");
    document.getElementById("arrowLeft").classList.remove("invisible");
    return;
  }
  if (closest === projects) {
    document.getElementById("arrowRight").classList.add("invisible");
    return;
  }
}

window.addEventListener('load', arrows);

const Home = () => {
  const [width,] = useWindowSize();
  projects.sort((a, b) => new Date(b.date.year, b.date.month - 1) - new Date(a.date.year, a.date.month - 1));
  window.addEventListener('scroll', function (e) {
  });

  useEffect(() => {
    onScrollHomepage()
  }, []);

  return (
    <>
      <div className="arrowLeft"
        style={
          {
            position: "fixed",
            left: 0,
            bottom: 0,
            margin: "1rem",
            padding: "1rem"
          }
        }>
        <ArrowLeft id="arrowLeft"
          style={
            {
              width: 30,
              height: 30
            }
          } onClick={
            (e) => {
              let home = Math.abs(document.getElementById("home").getBoundingClientRect().x);
              let about = Math.abs(document.getElementById("about").getBoundingClientRect().x);
              let projects = Math.abs(document.getElementById("projects").getBoundingClientRect().x);
              let closest = Math.min(home, about, projects);

              if (closest === about) {
                document.getElementById('home').scrollIntoView();
                arrows();
                return;
              }
              if (closest === projects) {
                document.getElementById('about').scrollIntoView();
                arrows();
                return;
              }
              if (closest === home) {
                return;
              }
            }} />
      </div>
      <div className="arrowRight"
        style={
          {
            position: "fixed",
            right: 0,
            bottom: 0,
            margin: "1rem",
            padding: "1rem"
          }
        }>
        <ArrowRight id="arrowRight"
          style={
            {
              width: 30,
              alignSelf: "flex-end",
              height: 30,
              justifySelf: "flex-end"
            }
          } onClick={
            (e) => {
              let home = Math.abs(document.getElementById("home").getBoundingClientRect().x);
              let about = Math.abs(document.getElementById("about").getBoundingClientRect().x);
              let projects = Math.abs(document.getElementById("projects").getBoundingClientRect().x);
              let closest = Math.min(home, about, projects);

              if (closest === home) {
                document.getElementById('about').scrollIntoView();
                arrows();
                return;
              }
              if (closest === about) {
                document.getElementById('projects').scrollIntoView();
                arrows();
                return;
              }
              if (closest === projects) {
                return;
              }
            }} />
      </div>
      <div id="homepage">
        <div className="pane"
          id="home">
          <div className="content">
            <h1 className="title">
              Reeven
            </h1>
            <div className="content-body"
              style={{ display: "flex", flexDirection: "column" }}>
              <div id="working-svg">
                <Working id="working"
                  style={{ maxWidth: width - 20 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="pane" id="about">
          <div className="content">
            <h1 className="title">
              About
            </h1>
            <div className="about-text">
              <p className="about-text-intro">
                Hi there! I am <span className="highlight">Reeven</span>, a developer from Belgium.<br />
                <br />
                I thoroughly enjoy solving enigmas, learning, <a href="https://lichess.org">chess</a>, exercising and honing my current set of skills.<br />
                <br />
                One of my key attributes is that I speak the language of developers with a users perspective in mind.<br />
              </p>

              {/* 2. Significant personal achievements or awards
              3. Personal details: goals, hobbies, ...

              I am a young designer and developer from Belgium.
              I want to create a smile on the face of the people around me.
              I enjoy solving enigmas and problems of any kind.
              I love to travel to distant countries. */}

            </div>
            {/* <div className="social-section">
              <h2 className="social-title">
                Socials
              </h2>
              <div className="social-content">
                <div className="social-row-mobile">
                  <div className={`social-github`}>
                    <a href="https://github.com/reeveng">
                      <img alt="@reeveng on github" width="32px" height="32px" src={socialMedia["github"]} />
                    </a>
                  </div>
                  <div className={`social-gmail`}>
                    <a href="mailto:govaertreeven@gmail.com">
                      <img alt="govaertreeven@gmail.com is my emailaddress" width="32px" height="32px" src={socialMedia["gmail"]} />
                    </a>
                  </div>
                </div>
                <div className="social-row-mobile">
                  <div className={`social-dribbble`}>
                    <a href="https://dribbble.com/reeveng">
                      <img alt="reeveng on dribbble" width="32px" height="32px" src={socialMedia["dribble"]} />
                    </a>
                  </div>
                  <div className={`social-linkedin`}>
                    <a href="https://www.linkedin.com/in/rgovaert/">
                      <img alt="rgovaert on linkedin" width="32px" height="32px" src={socialMedia["linkedin"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="pane" id="projects">
          <div className="content">
            <h1 className="title" style={{ maxWidth: width }}>
              Projects
            </h1>
            <div className="project-list">
              {projects.map((project, index) => {
                return (<ProjectCard imgSrc={project.img_src} projectId={project.id} key={project.id} cardTitle={project.title} imgAlt={project.img_alt} index={index} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
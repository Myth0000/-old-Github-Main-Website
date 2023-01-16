import React from "react";
import { useState } from "react";
import mockData from "../mockData.json";
import SocialMedia from "./SocialMedia";
import Slideshow from "./Slideshow";
import githubImage from "../images/GitHub.png";
import websiteLogo from "../images/myth0000logo.png";

export default class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {

    // MOCK DATA 
    this.setState({
            projects: mockData,
          });

    // USE THIS AFTER I FINNALLY HOST THE ProjectsAPI
    // let projectsJson = fetch("/projects")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       projects: data,
    //     });
    //   });
  }

  render() {

    // converts json project data into a Project react component
    const data = this.state.projects.map((project) => (
      <Project
        key={project.id}
        name={project.name}
        description={project.description}
        imageUrl={project.imageUrl}
        link={project.link}
        socialMediaArray={project.socialMediaArray.map((socialMedia, index) => (
          <SocialMedia content={socialMedia.content} key={index} size="small"
          image={socialMedia.imageUrl} link={socialMedia.link} /> 
        ))}
      />
    ));

// {"content": , "imageUrl": , "link": }

    return (
      <div className="projects" ref={this.props.scrollReference}>
        <h1 className="topic_title">Projects</h1>
        <p className="topic_description">
          These are some of the projects I have worked on during my software
          crusade.
        </p>
        <div className="projectsContainer">
          {data.length === 0 ? null : data}
        </div>
      </div>
    );
  }
}

function Project(props) {
  // underlines project name on hover
  const [showProjectOverview, setShowProjectOverview] = useState(false);


  function projectClicked() {
    // updates state
    setShowProjectOverview(true);
  }

  function closeButtonClicked() {
    setShowProjectOverview(false);
  }

  return (
    <>
      { /* If isDynamic=true, SimpleProject will change on hover & show ProjectOverview on click */ }
      <SimpleProject isDynamic={true} name={props.name} imageUrl={props.imageUrl} projectClicked={projectClicked}/>
      { showProjectOverview === true ?
      <ProjectOverview name={props.name} description={props.description} imageUrl={props.imageUrl}
      socialMediaArray={props.socialMediaArray} closeButtonClicked={closeButtonClicked}
      />
      : null }
    </>
  );
}

function ProjectOverview(props) {
  return (
    <div className="ProjectOverview">
      <div className="ProjectHeader">
        <SimpleProject name={props.name} imageUrl={props.imageUrl} />
        <div className="ProjectSocialMediaContainer"> {props.socialMediaArray} </div>
      </div>
      <div id="line" />
      <div className="ProjectDetails">
        <Slideshow Images={[githubImage, websiteLogo]}/>
        <p>{props.description}</p>
      </div>
      <button onClick={props.closeButtonClicked}>X</button>
    </div>
  );
}

function SimpleProject(props)
{
  const [textDeco, setTextDecoration] = useState("none");
  let content = <>
    <img src={props.imageUrl} draggable="false"/>
    <p style={{textDecoration: textDeco}}>{props.name}</p>
  </>
  
  if(props.isDynamic === true)
  {
    return (
      <div className="Project"
      onMouseOver={() => { setTextDecoration("underline")}}
      onMouseLeave={() => { setTextDecoration("none")}}
      onClick={props.projectClicked}> {content} </div>
    );
  }
  else
  {
    return (
      <div className="Project">
          {content}
      </div>
    )
  }
  
}

import React from "react";
import { useState, ReactDOM } from "react";
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
          <ProjectOverview name={null} description={null} imageUrl={null}
      socialMediaArray={null} closeButtonClicked={() => document.getElementsByClassName("ProjectOverview")[0].style.display = "none"} />
        </div>
      </div>
    );
  }
}

function Project(props) {

  function projectClicked() {
    getElement(".ProjectOverview").style.display = "grid";
    getElement(".ProjectOverview .Project p").textContent = props.name;
    getElement(".ProjectOverview .Project img").src = props.imageUrl;
    getElement(".ProjectOverview .ProjectDetails p").textContent = props.description;

    getElement(".ProjectOverview .ProjectSocialMediaContainer").appendChild();
    let socialMediaContainer = document.createElement("div");
    ReactDOM.render(
      this.props.socialMediaArray[0]
    );
    console.log(props.socialMediaArray);


    function getElement(elementName) { return document.querySelector(elementName); }
  }

  return (
    <>
      { /* If isDynamic=true, SimpleProject will change on hover & show ProjectOverview on click */ }
      <SimpleProject isDynamic={true} name={props.name} imageUrl={props.imageUrl} projectClicked={projectClicked}/>
    </>
  );
}

/*

<ProjectOverview name={props.name} description={props.description} imageUrl={props.imageUrl}
      socialMediaArray={props.socialMediaArray} closeButtonClicked={closeButtonClicked} />

*/

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

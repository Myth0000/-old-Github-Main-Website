import React from "react";
import { useState, useEffect } from "react";
import {getElement} from "../functions/doc.js";
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
      projectOverviewInfo: {
        images: [],
        slideshowIndex: 0
      }
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

  projectClicked(name, imageUrl, description, socialMediaArray, imagesArray) {

    // switches ProjectOverview's display to grid/flex depending on screen size
    let projectOverview = getElement(".ProjectOverview");
    if(document.documentElement.clientWidth <= 625) {
      projectOverview.style.display = "flex";
    } else { projectOverview.style.display = "grid"; }
    
    // fills ProjectOverview with new content
    this.setState({
      projectOverviewInfo: {
        images: imagesArray,
        slideshowIndex: this.state.projectOverviewInfo.slideshowIndex
      }
    });
    getElement(".ProjectOverview .Project p").textContent = name;
    getElement(".ProjectOverview .Project img").src = imageUrl;
    getElement(".ProjectOverview .ProjectDetails p").textContent = description;

    // removes any pre-existing social medias from the .ProjectSocialMediaContainer
    let socialMediaContainer = getElement(".ProjectOverview .ProjectSocialMediaContainer");
    while(socialMediaContainer.firstChild) {
      socialMediaContainer.removeChild(socialMediaContainer.firstChild);
    }

    // adds the list of social media associated with the project to project overview page
    for(let [index, socialMedia] of socialMediaArray.entries()) {
      // creates a social media
      let _socialMedia = document.createElement("a");
      _socialMedia.className = "SocialMedia";
      _socialMedia.id = "SmallSocialMedia";
      _socialMedia.href = socialMedia.link;
      _socialMedia.target = "_blank";
      getElement(".ProjectOverview .ProjectSocialMediaContainer").appendChild(_socialMedia);

      // creates image for social media
      let socialMediaImage = document.createElement("img");
      socialMediaImage.draggable = false;
      socialMediaImage.src = socialMedia.imageUrl;
      socialMediaImage.alt = "Social Media Image";
      getElement(".ProjectOverview .ProjectSocialMediaContainer .SocialMedia", index).appendChild(socialMediaImage);

      // creates socialMedia element's content
      let socialMediaContent = document.createElement("p");
      socialMediaContent.textContent = socialMedia.content;
      getElement(".ProjectOverview .ProjectSocialMediaContainer .SocialMedia", index).appendChild(socialMediaContent);
    }    
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
        socialMediaArray={project.socialMediaArray}
        images={this.state.projectOverviewInfo.images}
        onClick={() => this.projectClicked(project.name, project.imageUrl, project.description, project.socialMediaArray, project.images)}
      />
    ));

    return (
      <div className="projects" ref={this.props.scrollReference}>
        <h1 className="topic_title">Projects</h1>
        <p className="topic_description">
          These are some of the projects I have worked on during my software
          crusade.
        </p>
        <div className="projectsContainer">
          {data.length === 0 ? null : data}
          <ProjectOverview name={null} description={null} imageUrl={null} slideshowIndex={this.state.projectOverviewInfo.slideshowIndex}
      socialMediaArray={null} images={this.state.projectOverviewInfo.images}/>
        </div>
      </div>
    );
  }
}




function Project(props) {
  return (
    <>
      { /* If isDynamic=true, SimpleProject will change on hover & show ProjectOverview on click */ }
      <SimpleProject isDynamic={true} name={props.name} imageUrl={props.imageUrl}
      projectClicked={() => props.onClick(props.name, props.imageUrl, props.description, props.socialMediaArray, props.images)}/>
    </>
  );
}




function ProjectOverview(props) {

  useEffect(() => {
    // changes display to grid/flex based on screen size
    window.addEventListener("resize", () => {
      let projectOverview = getElement(".ProjectOverview");

      if(projectOverview.style.display !== "none") {
        let width = document.documentElement.clientWidth;
        
        if(width <= 625) { projectOverview.style.display = "flex"; }
        else { projectOverview.style.display = "grid"; }
      }
    });
  });

  
  return (
    <div className="ProjectOverview">
      <div className="ProjectHeader">
        <SimpleProject name={props.name} imageUrl={props.imageUrl} />
        <div className="ProjectSocialMediaContainer">  </div>
      </div>
      <div id="line" />
      <div className="ProjectDetails">
        <Slideshow Images={props.images} SlideshowIndex={props.slideshowIndex}/>
        <h1>{props.slideshowIndex}</h1>
        <p> </p>
      </div>
      <button onClick={() => document.getElementsByClassName("ProjectOverview")[0].style.display = "none"}>X</button>
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

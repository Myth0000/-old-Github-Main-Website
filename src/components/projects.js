import React from "react";
import { useState } from "react";
import mockData from "../mockData.json"

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
        </div>
      </div>
    );
  }
}

function Project(props) {
  // underlines project name on hover
  const [textUnderlined, setTextUnderlined] = useState("none");
  function onHover()
  {
    setTextUnderlined("underline");
  }

  function onNoHover()
  {
    setTextUnderlined("none");
  }

  return (
    <div className="Project" onMouseOver={onHover} onMouseLeave={onNoHover}>
      <img src={props.imageUrl} draggable="false"/>
      <p style={{textDecoration: textUnderlined}}>{props.name}</p>
    </div>
  );
}

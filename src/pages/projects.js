import React from "react";
import Project from "../components/Project";
import mockData from "../mockData.json"

export default class Projects extends React.Component {
  constructor() {
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
      <div className="projects">
        <h1 className="topic_title">Projects</h1>
        <p className="topic_description">
          These are some of the projects I have worked on during my software
          crusade.
        </p>
        {data.length === 0 ? null : data}
      </div>
    );
  }
}

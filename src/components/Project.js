import React from "react";


export default class Project extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return (
            <div className="projectContainer">
                <p id="projectName">{this.props.name}</p>
                <p id="projectDescription" >{this.props.description}</p>
                <div className="projectImageContainer">
                    <div className="projectImageBox">
                      <img id="projectImage" src={this.props.imageUrl} alt="Project Image"></img>
                    </div>
                </div>

                {
                    this.props.link.length === 0 ? null : <a id="projectLink" href={this.props.link} target="_blank">GitHub Repository Link</a>
                }
            </div>
        );
    }
}


/*
return (
            <div className="projectContainer">
                <p id="projectName">{this.props.name}</p>
                <div className="projectImageContainer">
                    <div className="projectImageBox">
                    <img id="projectImage" src={this.props.image} />
                    </div>
                </div>
            </div>
        );
*/
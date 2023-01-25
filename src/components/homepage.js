import React, { useRef, useState, useEffect } from "react";
import AboutMe from "./aboutme";
import Projects from "./projects";

export default function HomePage() {

  const [imagesBottom, setImagesBottom] = useState()
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

  const aboutMeElement = useRef(null);
  const projectsElement = useRef(null);

  


  return (
    <>
      <div className="homepage">
        <Banner projectsElement={projectsElement} aboutMeElement={aboutMeElement} />
        <div className="HomepageContent">
          <AboutMe scrollReference={aboutMeElement}/>
          <Projects scrollReference={projectsElement}/>
        </div>
      </div>
    </>
  );
}


class Banner extends React.Component {

  constructor(props)
  {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  navigationButtonClicked = (element) =>
  {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div className="banner" style={{height: document.documentElement.clientHeight}}>
        <h1 id="homepage_text">MYTH0000</h1>

        <div className="homepage_navigation_buttons">
          <button className="homepage_navigation_button" id="ProjectsButton" onClick={() => this.navigationButtonClicked(this.props.projectsElement)}>
            Projects
          </button>
          <button className="homepage_navigation_button" id="AboutMeButton" onClick={() => this.navigationButtonClicked(this.props.aboutMeElement)}>
            About Me
          </button>
        </div>
      </div>
    );
  };
}
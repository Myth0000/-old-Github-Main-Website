import React, { useRef } from "react";
import CSharpLogo from "../images/Csharp_Logo.png";
import JavaScriptLogo from "../images/javascriptlogo.png";
import HtmlLogo from "../images/htmllogo.png";
import CssLogo from "../images/csslogo.png";
import AboutMe from "./aboutme";
import Projects from "./projects";

export default function HomePage() {
  const aboutMeElement = useRef(null);
  const projectsElement = useRef(null);

  const navigationButtonClicked = (element) =>
  {
    console.log(element);
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="homepage">
      <h1 id="homepage_text">MYTH0000</h1>
      
      <div className="homepage_image_container">
          <img id="css_logo" src={CssLogo} alt="CSS Logo"/>
          <img id="csharp_logo" src={CSharpLogo} alt="C Sharp Logo"/>
          <img id="javascript_logo" src={JavaScriptLogo} alt="javascript_logo"/>
          <img id="html_logo" src={HtmlLogo} alt="H T M L Logo"/>
      </div>
      
      <div className="homepage_navigation_buttons">
        <button className="homepage_navigation_button" id="ProjectsButton" onClick={() => navigationButtonClicked(projectsElement)}>
          Projects
        </button>
        <button className="homepage_navigation_button" id="AboutMeButton" onClick={() => navigationButtonClicked(aboutMeElement)}>
          About Me
        </button>
      </div>

      <div className="aboutMeContainer" ref={aboutMeElement}>
        <AboutMe />
      </div>

      <div className="projectsContainer" ref={projectsElement}>
        <Projects />
      </div>
      
    </div>
  );
}

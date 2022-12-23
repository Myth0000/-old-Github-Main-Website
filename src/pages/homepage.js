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
  let htmlWidth = document.documentElement.clientWidth - 20;

  const navigationButtonClicked = (element) =>
  {
    console.log(element);
    window.scrollTo({
      top: element.current.offsetTop - 100, /* using flex display on view makes it so it scrolls below the page title, so I had to subtract 100 from it*/
      behavior: "smooth"
    })
  }


  return (
    <>
      <div className="homepage">
        <h1 id="homepage_text">MYTH0000</h1>

        <div className="homepage_navigation_buttons">
          <button className="homepage_navigation_button" id="ProjectsButton" onClick={() => navigationButtonClicked(projectsElement)}>
            Projects
          </button>
          <button className="homepage_navigation_button" id="AboutMeButton" onClick={() => navigationButtonClicked(aboutMeElement)}>
            About Me
          </button>
        </div>
        
        <div className="homepage_image_container">
            <img id="css_logo" src={CssLogo} alt="CSS Logo" draggable="false"/>
            <img id="csharp_logo" src={CSharpLogo} alt="C Sharp Logo" draggable="false"/>
            <img id="javascript_logo" src={JavaScriptLogo} alt="javascript_logo" draggable="false"/>
            <img id="html_logo" src={HtmlLogo} alt="H T M L Logo" draggable="false"/>
        </div>
        
        <AboutMe scrollReference={aboutMeElement}/>
        <Projects scrollReference={projectsElement}/>
        <div className="footer" style={{width:htmlWidth}}>
          <a href="https://myth0000.github.io">myth0000.github.io</a>
        </div>
      </div>
    </>
    
  );
}

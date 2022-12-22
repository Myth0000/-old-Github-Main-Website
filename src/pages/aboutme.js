import React from "react";
import discordImage from "../images/discord.png";
import githubImage from "../images/GitHub.png";
import youtubeImage from "../images/Youtube_logo.png";
import fiverrImage from "../images/fiverr.png"

export default class AboutMe extends React.Component
{
    constructor(props)
    {
        super();
    }

    render() {
        return (
            <div className="aboutme" ref={this.props.scrollReference}>
                <h1 id="aboutme_text" className="topic_title">About Me</h1>
                <p className="topic_description">I am a software enthusiast who loves creating new things on the internet. I have created many things, such as games, bots, and websites, during my software developement journey.</p>

                <SocialMedia image={discordImage} link="https://discord.gg/sWwX5XEKt4" content="Join my Discord Community" />
                <SocialMedia image={fiverrImage} link="https://www.fiverr.com/myth0000" content="Check out gigs in Fiverr" />
                <SocialMedia image={youtubeImage} link="https://www.youtube.com/channel/UCDUbefsnraiZ1WxlWWtyD3w" content="Check out my Youtube channel" />
                <SocialMedia image={githubImage} link="https://github.com/Myth0000" content="Check out my GitHub page" />
            </div>
        );
    }
}

function SocialMedia(props)
{
    return (
        <div className="socialMediaContainer">
            <a className="socialMediaLink" href={props.link} target="_blank">
                <div>
                <img id="socialMediaImage" src={props.image} alt="Social Media Image" />
                <p id="socialMediaContent">{props.content}</p>
                </div>
            </a>
        </div>
    );
}
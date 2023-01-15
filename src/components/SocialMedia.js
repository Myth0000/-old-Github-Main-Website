import React from "react";

export default class SocialMedia extends React.Component
{
    render()
    {
        return (
            <a className="SocialMedia" id={this.props.size === "small"? "SmallSocialMedia" : "SocialMedia"}
            href={this.props.link} target="_blank">
                <img drggable="false" src={this.props.image} alt="Social Media Image" />
                <p>{this.props.content}</p>
            </a>
        );
    }
}
import React from "react";
import forwardArrow from "../images/forwardArrow.png";
import backwardArrow from "../images/backwardArrow.png";

export default class Slideshow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {slideShowIndex: 0};
    }

    componentDidMount() {
        // rerenders the banner when resizing page
        window.addEventListener("resize", () => {
            this.forceUpdate();
        });
    }

    forwardButtonClicked()
    {
        let newIndex = this.state.slideShowIndex+1;
        if(this.props.Images[newIndex] === undefined)
        {
            this.setState({slideShowIndex: 0});
        }
        else
        {
            this.setState({slideShowIndex: newIndex});
        }
    }

    backwardButtonClicked()
    {
        let newIndex = this.state.slideShowIndex-1;
        if(this.props.Images[newIndex] === undefined)
        {
            this.setState({slideShowIndex: this.props.Images.length - 1});
        }
        else
        {
            this.setState({slideShowIndex: newIndex});
        }
        
    }

    getImageIndicators()
    {
        return this.props.Images.map((image, index) => {
            if(this.state.slideShowIndex === index) { return <ImageIndicator key={index} onImage="true" />; }
            else { return <ImageIndicator key={index} />; }
        });
    }

    render()
    {
        return (
            <div className="slideshow">
                <img className="slideshowImage" src={this.props.Images[this.state.slideShowIndex]} />

                <div className="imageNavigationButtons">
                    <img className="imageNavigationButton" src={forwardArrow} alt="forward arrow" draggable="false"
                    onClick={() => this.forwardButtonClicked()} />
                    <img className="imageNavigationButton" src={backwardArrow} alt="forward arrow" draggable="false"
                    onClick={() => this.backwardButtonClicked()} />
                </div>

                <div className="slideshowImageIndicators">
                    {this.getImageIndicators()}
                </div>
            </div>
        );
    }
}


function ImageIndicator(props) {

    let slideshowImageIndicatorClassName = (document.documentElement.clientWidth > 500) ? "slideshowImageIndicator" : "slideshowImageIndicatorMobile";
    let slideshowImageIndicatorOnImageClassName = (document.documentElement.clientWidth > 500) ? "slideshowImageIndicatorOnImage" : "slideshowImageIndicatorOnImageMobile";

    if(props.onImage)
    {
        return (
            <div className={slideshowImageIndicatorOnImageClassName}>
            </div>
        );
    }
    else
    {
        return (
            <div className={slideshowImageIndicatorClassName}>
            </div>
        );
    }
    
}
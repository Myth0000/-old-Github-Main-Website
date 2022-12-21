import React from "react";
import HomePage from "./homepage";
import AboutMe from "./aboutme";
import websiteLogo from "../images/favicon.ico";

export default class View extends React.Component {

    constructor()
    {
        super();
        
        this.state = {
            view: <HomePage />,
            navigationBarWidth: document.documentElement.clientWidth,
        }
        /*
        window.addEventListener("resize", () => {
            this.setState({
                navigationBarWidth: document.documentElement.clientWidth
            })

            console.log(`Width: ${this.navigationBarWidth}`);
        })
        */
    }


    render() {
        return (
            <div>
                {this.state.view}
            </div>








        















        // navigation_bar, etc....
        /*
        <div>
            <div
                className="navigation_bar"
                style={{ width: this.state.navigationBarWidth}}
            >
                <img
                id="logo"
                className="navigation_bar_child"
                src={websiteLogo}
                alt="Website Logo"
                />
                <p id="title" className="navigation_bar_child">
                <b>Website Title</b>
                </p>

                <div className="navigation_bar_child navigation_buttons_container">
                <button
                    className="navigation_button"
                    onClick={() => this.NavigationButtonClicked(<HomePage />)}
                >
                    Home
                </button>
                <button
                    className="navigation_button"
                    onClick={() => this.NavigationButtonClicked(<AboutMe />)}
                >
                    About Me
                </button>
                </div>
            </div>
        </div>
        */
        );
    }
}

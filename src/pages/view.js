import React from "react";
import HomePage from "./homepage";

export default class View extends React.Component {

    constructor()
    {
        super();
        
        this.state = {
            view: <HomePage />,
        }
    }


    render() {
        return (
            <div>
                {this.state.view}
            </div>
        );
    }
}

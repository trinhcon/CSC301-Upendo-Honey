import React from 'react';

import "./progress-bar.css";

class FlowProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="blueProgressBar"> 
                <div className="circle" id="first">
                    <img id={this.props.position == "one" ? "appears" : "invisible"} alt=""/>
                </div>
                <div className="verticalLine"></div>
                <div className="circle" id="second">
                    <img id={this.props.position == "two" ? "appears" : "invisible"} alt=""/>
                </div>
                <div className="verticalLine"></div>
                <div className="circle" id="third">
                    <img id={this.props.position == "three" ? "appears" : "invisible"} alt=""/>
                </div>
            </div>
        )
    }
}

export default FlowProgressBar;
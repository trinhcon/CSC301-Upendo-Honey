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
                    <div className={(this.props.position == "one" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
                <div className="verticalLine"></div>
                <div className="circle" id="second">
                    <div className={(this.props.position == "two" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
                <div className="verticalLine"></div>
                <div className="circle" id="third">
                    <div className={(this.props.position == "three" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
            </div>
        )
    }
}

export default FlowProgressBar;
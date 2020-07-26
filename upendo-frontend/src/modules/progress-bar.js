import React from 'react';

import "./progress-bar.css";

/**
 * Progress bar that is displayed on Desktop to indicate how far a user has
 * progressed through the flow of a particular subject. The icon will change
 * based on what image is provided to the flow progress bar. The position of
 * the icon on the bar will change based on the position of the user within
 * the flow
 */
class FlowProgressBar extends React.Component {
    /** props.position tells the class which container has an icon
     * props.flow tells the class which icon image to display
     */
    render() {
        return (
            <div className="goldProgressBar"> 
                <div className="circle" id="first">
                    <div className={(this.props.position === "one" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
                <div className="horizontalLine"></div>
                <div className="circle" id="second">
                    <div className={(this.props.position === "two" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
                <div className="horizontalLine"></div>
                <div className="circle" id="third">
                    <div className={(this.props.position === "three" ? "appears" : "invisible") + " " + this.props.flow}/>
                </div>
            </div>
        )
    }
}

export default FlowProgressBar;
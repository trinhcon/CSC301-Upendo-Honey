import React from 'react';
import "./navigation-icons.css";

// Loads the images
import Map from "../images/map.png";
import CO2 from "../images/CO2.png";
import Beekeeper from "../images/Beekeeper.png"
import Honey from "../images/honey.png";
import Continue from "../images/continueArrow.png"

// Imports Tooltip Text
import { Tooltips } from "../content";

// React Modules
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactTooltip from 'react-tooltip';
import MediaQuery from 'react-responsive';
import { FaHandPointer } from 'react-icons/fa';

/** Navigation icon class for the menu page
 * Chooses one of several predetermined icons **/
class NavigationIcon extends React.Component {
    /**Chooses the icon source based on the flow name provided*/
    render () {
        if (this.props.icon === "tanzania") {
            return (<NavIconContainer iconSrc={Map}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}
                tooltipText={Tooltips.forestFlow}
                position="top"/>); 
        } else if (this.props.icon === "environment") {
            return (<NavIconContainer iconSrc={CO2}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}
                tooltipText={Tooltips.environmentFlow}
                position="right"/>);
        } else if (this.props.icon === "beekeeper") {
            return (<NavIconContainer iconSrc={Beekeeper}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}
                tooltipText={Tooltips.beekeeperFlow}
                position="bottom"/>);
        } else {
            return (<NavIconContainer iconSrc={Honey}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}
                tooltipText={Tooltips.honeyFlow}
                position="left"/>);
        }
    }
}

// General navigation icon container class
class NavIconContainer extends React.Component {
    /* this.props.style determines a specific sizing or border style other than default*/
    /* this.props.id allows styling of a specific icon*/
    constructor(props) {
        super(props);
        this.state = {animate: false};
        this.handleClick=this.handleClick.bind(this);
        this.animateTooltip=this.animateTooltip.bind(this);
        this.stopAnimatingTooltip=this.stopAnimatingTooltip.bind(this);
    }

    // Reports click to google analytics
    handleClick (e) {
        ReactGA.event({
            category: "Flow Preference",
            action: "Clicked Menu Icon",
            label: this.props.icon,
        });
    }

    animateTooltip(e) {
        this.setState({animate: true}); // Shows the tootltip
    }

    stopAnimatingTooltip(e) {
        this.setState({animate: false});    // hides the tooltip
    }

    render () {
        return (
            <div className={"navContainer " + this.props.style} id={this.props.id}>
                <MediaQuery minDeviceWidth="600px">
                    <Link to={this.props.nextPage} onClick={this.handleClick}>
                    <img
                        className="navImage"
                        src={this.props.iconSrc}
                        alt="Navigation Icon"
                        data-tip
                        data-for={this.props.icon}/>
                    </Link>
                    <ReactTooltip id={this.props.icon} effect="solid">
                      <p className="toolTipText">{this.props.tooltipText}</p>
                    </ReactTooltip>
                </MediaQuery>
                <MediaQuery maxDeviceWidth="600px">
                    <img
                        className="navImage"
                        src={this.props.iconSrc}
                        alt="Navigation Icon"
                        data-event="click"
                        data-tip
                        data-for={this.props.icon}/>
                    <ReactTooltip
                      id={this.props.icon}
                      className="mobileTooltip"
                      effect="solid"
                      place={this.props.position}
                      clickable={true}
                      multiline={true}
                      afterShow={this.animateTooltip}
                      afterHide={this.stopAnimatingTooltip}>
                        <p className="toolTipText">{this.props.tooltipText}</p>
                        {Tooltips.swipeInstructions}
                        <br/>
                        <div className="swipeContainer">
                            <FaHandPointer className={this.state.animate ? "swipeHandAnimated" : "swipeHandStill"}/>
                        </div>
                        <br/>
                        <Link to={this.props.nextPage} onClick={this.handleClick}>
                            
                            <img
                                className="continueArrow"
                                src={Continue}
                                alt="Go to flow button"/>
                        </Link>
                    </ReactTooltip>
                </MediaQuery>
            </div>
        )
    }
}

export default NavigationIcon;
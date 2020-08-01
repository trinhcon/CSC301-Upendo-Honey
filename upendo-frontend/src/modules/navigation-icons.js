import React from 'react';
import "./navigation-icons.css";

// Loads the images
import Map from "../images/map.png";
import CO2 from "../images/CO2.png";
import Beekeeper from "../images/Beekeeper.png"
import Honey from "../images/honey.png";

// React Modules
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

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
                icon={this.props.icon}/> );
        } else if (this.props.icon === "environment") {
            return (<NavIconContainer iconSrc={CO2}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}/>);
        } else if (this.props.icon === "beekeeper") {
            return (<NavIconContainer iconSrc={Beekeeper}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}/>);
        } else {
            return (<NavIconContainer iconSrc={Honey}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}
                icon={this.props.icon}/>);
        }
    }
}

// General navigation icon container class
class NavIconContainer extends React.Component {
    /* this.props.style determines a specific sizing or border style other than default*/
    /* this.props.id allows styling of a specific icon*/
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    // Reports click to google analytics
    handleClick (e) {
        ReactGA.event({
            category: "Flow Preference",
            action: "Clicked Menu Icon",
            label: this.props.icon,
        });
    }

    render () {
        return (
            <div className={"navContainer " + this.props.style} id={this.props.id}>
                <Link to={this.props.nextPage} onClick={this.handleClick}>
                  <img className={"navImage"} src={this.props.iconSrc} alt="Navigation Icon"/>
                </Link>
            </div>
        )
    }
}

export default NavigationIcon;
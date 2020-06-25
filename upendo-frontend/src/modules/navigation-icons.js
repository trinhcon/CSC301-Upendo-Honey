import React from 'react';
import "./navigation-icons.css";
import Map from "../images/map.png";
import CO2 from "../images/CO2.png";
import Beekeeper from "../images/Beekeeper.png"
import Honey from "../images/honey.png";

class NavigationIcon extends React.Component {
    render () {
        if (this.props.icon === "tanzania") {
            return (<NavIconContainer iconSrc={Map}/>);
        } else if (this.props.icon === "environment") {
            return (<NavIconContainer iconSrc={CO2}/>);
        } else if (this.props.icon === "beekeeper") {
            return (<NavIconContainer iconSrc={Beekeeper}/>);
        } else {
            return (<NavIconContainer iconSrc={Honey}/>);
        }
    }
}

class NavIconContainer extends React.Component {
    render () {
        return (
            <div className = "navContainer">
                <img className="navImage" src={this.props.iconSrc}/>
            </div>
        )
    }
}

export default NavigationIcon;
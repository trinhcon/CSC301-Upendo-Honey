import React from 'react';
import "./navigation-icons.css";
import Map from "../images/map.png";
import CO2 from "../images/CO2.png";
import Beekeeper from "../images/Beekeeper.png"
import Honey from "../images/honey.png";
import { Link } from 'react-router-dom';

class NavigationIcon extends React.Component {
    render () {
        if (this.props.icon === "tanzania") {
            return (<NavIconContainer iconSrc={Map}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}/> );
        } else if (this.props.icon === "environment") {
            return (<NavIconContainer iconSrc={CO2}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}/>);
        } else if (this.props.icon === "beekeeper") {
            return (<NavIconContainer iconSrc={Beekeeper}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}/>);
        } else {
            return (<NavIconContainer iconSrc={Honey}
                id={this.props.id}
                nextPage={this.props.nextPage}
                style={this.props.iconClass}/>);
        }
    }
}

class NavIconContainer extends React.Component {
    render () {
        return (
            <div className={"navContainer " + this.props.style} id={this.props.id}>
                <Link to={this.props.nextPage}>
                  <img className={"navImage"} src={this.props.iconSrc}/>
                </Link>
            </div>
        )
    }
}

export default NavigationIcon;
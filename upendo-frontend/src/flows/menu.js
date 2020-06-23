import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import { Link } from 'react-router-dom';

class MenuPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="menuPage">
                <h1 id="honeyHeader" >Click Below to Discover More</h1>
                <div id="leftHoneyJar"></div>
                <div id="honeyJar"></div>
                <div className="iconButton"></div>
                <div>
                    <iconContainer/>
                    <iconContainer id="beekeeper"
                        nextPage={this.props.beekeeperFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer/>
                    <iconContainer id="environment"
                        nextPage={this.props.environmentFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer/>
                    <iconContainer id="honey"
                        nextPage={this.props.honeyFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer/>
                    <iconContainer id="tanzania"
                        nextPage={this.props.tanzaniaFirstPage}
                        icon={this.props.beeekeeperIcon}
                    />
                    <iconContainer/>
                </div>


                <FlowFooter footerClass="blackFooter"/>
            </div>
        )
 
    }

}

class iconContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        if (this.props.icon !== "") {
            return (
                <div id={this.props.id} className="iconButton">
                    <Link to={this.props.nextPage}>
                        <img src={this.props.icon}/>
                     </Link>
                </div>
            );
        } else {
            return (
                <div className="iconButtonEmpty">
                </div>
            );
        }

    }
}

export default MenuPage;
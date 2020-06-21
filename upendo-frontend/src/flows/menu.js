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
                <h1>Click Below to Discover More</h1>
                <iconContainer id="beekeeper"
                nextPage={this.props.beekeeperFirstPage}/>
                <iconContainer id="environment"
                nextPage={this.props.environmentFirstPage}/>
                <iconContainer id="honey"
                nextPage={this.props.honeyFirstPage}/>
                <iconContainer id="tanzania"
                nextPage={this.props.tanzaniaFirstPage}/>
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
        return (
            <div class="iconButton">
                <Link to={this.props.nextPage}/>
            </div>
        )

    }
}

export default MenuPage;
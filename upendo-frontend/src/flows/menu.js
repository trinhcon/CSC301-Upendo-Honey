import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import HoneyJar from '../images/honeyjar.png';
import MediaQuery from 'react-responsive';
import Logo from '../images/upendo-logo.jpg';
import NavigationIcon from '../modules/navigation-icons.js';
import Left from '../images/header-left.png'

class MenuPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="menuPage">
                <MediaQuery minDeviceWidth="1000px">
                    <img id="honeyJar" src={HoneyJar} />
                    <div className="honeyHeaderLeft"/>
                    <div className="honeyHeaderRight"/>
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="environment"
                        id="icon1"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="tanzania"
                        id="icon2"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="beekeeper"
                        id="icon3"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="honey"
                        id="icon4"
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth="1000px" >
                <h1 id="honeyHeader" >Click Below to Discover More...</h1>
                <img id="honeyJar" src={HoneyJar} />
                <div id="iconGrid">
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="beekeeper"
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.environmentFirstPage}
                        icon="environment"
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.honeyFirstPage}
                        icon="honey"
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.tanzaniaFirstPage}
                        icon="tanzania"
                    />
                    <IconContainer button={false} />
                </div>
                </MediaQuery>
                <FlowFooter content="This is the Footer" footerClass='blackFooter'
                isMenu={true} retailerLink="http://upendoagri.com/" retailerLogo={Logo}/>
            </div>
        )
 
    }

}

class IconContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.button) {
            return (
                <NavigationIcon className="iconButton"
                icon={this.props.icon}
                nextPage={this.props.nextPage} 
                id={this.props.id}/>
            );
        } else {
            return (
                <div className="iconButtonEmpty">
                    <p>bye</p>
                </div>
            );
        }
    }

}
export default MenuPage;
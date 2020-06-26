import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import HoneyJar from '../images/honeyjar.png';
import MediaQuery from 'react-responsive';
import NavigationIcon from '../modules/navigation-icons.js';
import Left from '../images/header-left.png'

class MenuPage extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const { alphaCode } = this.props.match.params;
        if ((typeof alphaCode !== undefined) && ! this.props.getDataStatus()){
            console.log("AlphaCode is:");
            console.log(alphaCode);
            await this.props.setAlphaCode(alphaCode);
            await this.props.retrieveAppData();
        } else {
            console.log('DEVLOG: URL Param Matching failed');
        }
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
                        nextPage={this.props.beekeeperFirstPage}
                        icon="environment"
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="honey"
                    />
                    <IconContainer button={false} />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="tanzania"
                    />
                    <IconContainer button={false} />
                </div>
                </MediaQuery>
                <FlowFooter content="This is the Footer" footerClass='blackFooter'
                isMenu={true} retailerLink={this.props.retailerURL} retailerLogo={this.props.retailerIcon}/>
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
import React from 'react';

import './menu.css';
import FlowFooter from '../modules/footer';
import FlowHeader from '../modules/header';
import MediaQuery from 'react-responsive';
import NavigationIcon from '../modules/navigation-icons.js';

/*CHANGE APP.JS TO PASS IN RETAILER INFORMATION*/

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
                <FlowHeader
                headerClass="greenStripMenu"
                textStyle="menuText"
                content="Click an Icon to Discover More!"/>
                <MediaQuery minDeviceWidth="1000px">
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
                <ExtraInformationContainer
                retailerLink={this.props.retailerLink}
                retailerLogo={this.props.retailerLogo}/>
                <FlowFooter content="This is the Footer" footerClass='patternedFooter'
                isMenu={true}/>
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
                id={this.props.id}
                iconClass="menu"/>
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

class ExtraInformationContainer extends React.Component {
    render () {
      return (
        <div className="moreInfo">
          <p id="logoText">Want more information? </p>
          <a href={this.props.retailerLink}>
            <img id="logo" src={this.props.retailerLogo}/>
          </a>
        </div>
      )
    }
  }
export default MenuPage;
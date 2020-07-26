import React from 'react';
import './menu.css';

// Import Modules
import FlowFooter from '../modules/footer';
import FlowHeader from '../modules/header';
import NavigationIcon from '../modules/navigation-icons.js';

// React librairies
import MediaQuery from 'react-responsive';

/** Menu page is the navigation main page after
 * entering in a code.  Has four different icons that
 * link to the different informative flows.
 */
class MenuPage extends React.Component{
    /** Contains two different formats for mobile and desktop
     * Mobile is laid out using a 3x3 grid
     * Desktop is laid out using CSS Grid */

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
                <MediaQuery minDeviceWidth="600px">
                    <IconContainer button={true} 
                        nextPage={this.props.environmentFirstPage}
                        icon="environment"
                        id="icon1"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.tanzaniaFirstPage}
                        icon="tanzania"
                        id="icon2"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.beekeeperFirstPage}
                        icon="beekeeper"
                        id="icon3"
                    />
                    <IconContainer button={true} 
                        nextPage={this.props.honeyFirstPage}
                        icon="honey"
                        id="icon4"
                    />
                </MediaQuery>
                <MediaQuery maxDeviceWidth="600px" >
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
                <ExtraInformationContainer
                retailerLink={this.props.retailerLink}
                retailerLogo={this.props.retailerLogo}/>
                <FlowFooter footerClass='patternedFooter'/>
            </div>
        )
 
    }

}

/**
 * Serves as the container for the icons which are buttons to
 * press in order to progress into that particular subject's flow
 */
class IconContainer extends React.Component{

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
                </div>
            );
        }
    }

}

/**
 * External Link to Upendo Honey Website of their choice
 */
class ExtraInformationContainer extends React.Component {
    render () {
      return (
        <div className="moreInfo">
          <p id="logoText">Want more information? </p>
          <a href={this.props.retailerLink}>
            <img id="logo" src={this.props.retailerLogo} alt="Upendo Honey"/>
          </a>
        </div>
      )
    }
  }
export default MenuPage;
import React from 'react';
import "./footer.css";
import MediaQuery from 'react-responsive';
import NavigationIcon from './navigation-icons.js';
import MovingBee from '../images/moving-bee.png';

class FlowFooter extends React.Component {
  constructor(props) {
    super(props);
    /* props.content content of the footer, can be empty string */
    /* props.footerClass is the class to style the footer */
    /*  */
  }

  render() {
    if (this.props.isMenu) {
      return (
        <footer className={this.props.footerClass}>
        <MediaQuery minDeviceWidth="800px">
          <PureJoy/>
          <h1 id="menuText">Click Above to Discover More!</h1>
        </MediaQuery>
        <ExtraInformationContainer
        retailerLink={this.props.retailerLink}
        retailerLogo={this.props.retailerLogo}/>
      </footer>
      )
    } else if (this.props.footerClass === "movingBee"){
      return (
        <footer className={this.props.footerClass}>
          <img id="movingBeeImage" src={MovingBee} alt="Moving Bee"/>
        </footer>
      )
    } else {
      return (
        <footer className={this.props.footerClass}>
          <MediaQuery minDeviceWidth="800px">
            <NavigationIcons/>
            <PureJoy/>
          </MediaQuery>
        </footer>
        
      );
    }
  }
}

class NavigationIcons extends React.Component {
  render() {
    return (
      <div className="navigationIcons">
        <NavigationIcon icon="tanzania"/>
        <NavigationIcon icon="environment"/>
        <NavigationIcon icon="honey"/>
      </div>
    )
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

class PureJoy extends React.Component {
  render () {
    return (
      <div className="pureJoy">
        <img src='https://static.wixstatic.com/media/5bc36c_ed0309d34e004b2eafe5da6d018bc4c7~mv2.png/v1/fill/w_77,h_88,al_c,q_85,usm_0.66_1.00_0.01/Transparent%20Logo.webp'
        alt='Pure Joy Icon' id="pureJoyImage"/>
      </div>

    )
  }
}

export default FlowFooter;
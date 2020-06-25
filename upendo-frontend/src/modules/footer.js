import React from 'react';
import "./footer.css";
import MediaQuery from 'react-responsive';

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
        <footer className={this.props.footerClass}/>
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
        <img src='' alt='forestFlowIcon'/>
        <img src='' alt='honeyFlowIcon' />
        <img src='' alt='cO2FlowIcon' />
      </div>
    )
  }
}

class ExtraInformationContainer extends React.Component {
  render () {
    return (
      <div className="moreInfo">
        <p id="logoText">Click the Logo to Learn More!</p>
        <a link={this.props.retailerLink}>
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
        <img src='' alt='Pure Joy Icon'/>
      </div>

    )
  }
}

export default FlowFooter;
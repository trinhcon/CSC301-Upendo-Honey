import React from 'react';
import "./environment-forest.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import NextArrow from '../../modules/next-arrow';
import FlowProgressBar from '../../modules/progress-bar';
import BulletPoints from '../../modules/bullet-points';

// React librairies
import {Swipeable} from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';

/**
 * Introductory page to carbon graphs, passed in hard
 * coded text and an image of the forest.
 */
class EnvironmentForestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectGraph: false}
  }

  swipeLeftHandler() { /** Redirect to the Next Page */
    this.setState({redirectMenu: false, redirectGraph: true});
  }

  swipeRightHandler() { /** Redirect to the Menu */
    this.setState({redirectMenu: true, redirectGraph: false});
  }

  async componentDidMount() { /** If arrived through URL, fetch resources */
    const { alphaCode } = this.props.match.params;
    if ((typeof alphaCode !== undefined) && !this.props.getDataStatus()){
        await this.props.setAlphaCode(alphaCode);
        await this.props.retrieveAppData();
    } else {
        console.log('Data Already Retrieved');
    }
  }

  render() {
    if (this.state.redirectMenu) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/>);
    } else if (this.state.redirectGraph){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/environment-carbon-graph'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="environmentForestPage"
        >
        <FlowHeader
          content={this.props.headerName}
          headerClass="greenStrip"
          textStyle="greenStripTextSmall"
        />
            
        <img className="environmentForestImage" src={this.props.forestPhoto} alt="Tanzanian Trees"/>
        <div className="environmentForestText">
          <BulletPoints style="" bulletStyle="beeBullet" points={this.props.text}/>
        </div>
        
        <MediaQuery minDeviceWidth="600px">
          <FlowProgressBar position="one" flow="environmentProgress"/>
          <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/environment-carbon-graph'} direction="right"/>
          <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'} direction="left"/>
        </MediaQuery>
        <FlowFooter
          content=""
          footerClass="patternedFooter"
        />
        </Swipeable>
      );
    }
  }

}

export default EnvironmentForestPage;
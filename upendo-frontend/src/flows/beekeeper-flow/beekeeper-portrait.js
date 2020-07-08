import React from 'react';

import "./beekeeper-portrait.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class BeekeeperPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectLetter: false, redirectMenu: false};

  }

  swipeLeftHandler(eventData) {
    this.setState({redirectLetter:true, redirectMenu: false});
    console.log("picu slided");
  }

  swipeRightHandler(eventData) {
    this.setState({redirectLetter: false, redirectMenu: true})
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
  render() {
    if (this.state.redirectLetter) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/beekeeper-letter'}/>);
    } else if (this.state.redirectMenu) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/>);
    } else {
      return (
          <Swipeable onSwipedLeft={this.swipeLeftHandler}
          onSwipedRight={this.swipeRightHandler}
          className="beekeeperFlexContainer">
            <FlowHeader content="Meet your Beekeeper" headerClass="greenStrip"
            textStyle="greenStripText"/>
            <MediaQuery minDeviceWidth="800px">
              <FlowProgressBar position="one" flow="beekeeperProgress"/>
              <NextArrow nextPage={'/app/' + this.props.getAlphaCode() +'/beekeeper-letter'} direction="right"/>
              <NextArrow nextPage={'/app/' + this.props.getAlphaCode() +'/menu'} direction="left"/>
              
            </MediaQuery>
            <BeekeeperPortrait beekeeperName={this.props.beekeeperName}
              imageURL={this.props.imageURL}/>
            <BeekeeperDescriptionContainer
              content={this.props.beekeeperDescription}/>
            <FlowFooter content="This is the Footer" footerClass="patternedFooter"/>
          </Swipeable>
      );
    }
  }
}

class BeekeeperPortrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portrait">
        <div className="portraitShape" >
          <img className="portraitImage" src={this.props.imageURL}/>
        </div>
       <figcaption className="portraitCaption">
        {this.props.beekeeperName}
       </figcaption> 
      </div>
    );
  }
}

class BeekeeperDescriptionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="descriptionContainer">
        <div className="Bee"></div>
        <div className="verticalBar"></div>
        <p className="description"> {this.props.content}</p>
        <p footer></p>
      </div>
      
    );
  }
}





export default BeekeeperPage;
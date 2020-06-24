import React from 'react';

import "./beekeeper-portrait.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import NextArrow from '../../modules/next-arrow'
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class BeekeeperPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.state = {redirectLetter: false};

  }

  swipeLeftHandler(eventData) {
    this.setState({redirectLetter:true});
    console.log("picu slided");
  }

  render() {
    if (this.state.redirectLetter) {
      return (<Redirect to='/beekeeper-letter'/>);
    } else {
      return (
          <Swipeable onSwipedLeft={this.swipeLeftHandler}
          className="beekeeperFlexContainer">
            <FlowHeader content="Meet your Beekeeper" headerClass="blueStrip"
            textStyle="blueStripText"/>
            <MediaQuery minDeviceWidth="800px">
              <FlowProgressBar position="one"/>
              <NextArrow nextPage="/beekeeper-letter"/>
              <img id="trees" src="" alt=""/>
            </MediaQuery>
            <BeekeeperPortrait beekeeperName={this.props.beekeeperName}
              imageURL={this.props.imageURL}/>
            <BeekeeperDescriptionContainer
              content={this.props.beekeeperDescription}/>
            <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
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
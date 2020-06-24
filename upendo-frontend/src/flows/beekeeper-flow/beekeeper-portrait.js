import React from 'react';

import "./beekeeper-portrait.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

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

  async componentDidMount() {
    const { alphaCode } = this.props.match.params;
    if (typeof alphaCode !== undefined){
        this.props.setAlphaCode(alphaCode);
        this.props.retrieveAppData();
    } else {
        console.log('DEVLOG: URL Param Matching failed');
    }
}

  render() {
    if (this.state.redirectLetter) {
      return (<Redirect to={'/' + this.props.getAlphaCode() + '/beekeeper-letter'}/>);
    } else {
      return (
          <Swipeable onSwipedLeft={this.swipeLeftHandler}
          className="beekeeperFlexContainer">
            <FlowHeader content="Meet your Beekeeper" headerClass="blueStrip"
            textStyle="blueStripText"/>
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
      <div>
        <div className="Bee"></div>
        <div className="verticalBar"></div>
        <p className="description"> {this.props.content}</p>
        <p footer></p>
      </div>
      
    );
  }
}





export default BeekeeperPage;
import React from 'react';

import "./honey-health.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import {Swipeable } from 'react-swipeable';
import { Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class HoneyHealthPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {redirectMenu: false, redirectHarvest: false, part: "1"}
  }

  swipeLeftHandler() {
    if (this.state.part === "1") {
      console.log("On Two");
      this.setState({part: "2"});
    } else if (this.state.part === "2") {
      console.log("On Three")
      this.setState({part: "3"});
    } else {
      this.setState({redirectMenu: true, redirectHarvest: false});
    }
  }

  swipeRightHandler() {
    if (this.state.part === "1") {
      this.setState({redirectMenu: false, redirectHarvest: true});
    } else if (this.state.part === "2") {
      this.setState({part: "1"});
    } else {
      this.setState({part: "2"});
    }
  }

  clickHandler() {
    if (this.state.part === "1") {
      this.setState({part: "2"});
    } else {
      this.setState({part: "1"});
    }
  }

  async componentDidMount() {
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
    } else if (this.state.redirectHarvest){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/honey-harvest'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="honeyHealthPage"
        >
          <FlowHeader
            content="Heavenly Healthy Honey"
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <MediaQuery minDeviceWidth={"600px"}>
            <HoneyContent
              healthDescription={this.props.healthDescription}
              bulletPoints={this.props.bulletPoints}
              honeyPhoto1={this.props.honeyPhoto1}
              honeyPhoto2={this.props.honeyPhoto2}
              part={this.state.part}
              clickHandler={this.clickHandler}
              isDesktop={true}
            />

            <FlowProgressBar position="three" flow="honeyProgress"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'} direction="right"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-harvest'} direction="left"/>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={"600px"}>
            <HoneyContent
              healthDescription={this.props.healthDescription}
              bulletPoints={this.props.bulletPoints}
              honeyPhoto1={this.props.honeyPhoto1}
              honeyPhoto2={this.props.honeyPhoto2}
              clickHandler={this.clickHandler}
              part={this.state.part}
              isDesktop={false}
            />
          </MediaQuery>
          <FlowFooter content="" footerClass="patternedFooter"/>
        </Swipeable>
      );
    }
  }
}

class HoneyContent extends React.Component {
  render() {
    const part1 = <TextPart partId="healthPart1" description={this.props.healthDescription.slice(0, 1)}
      clickHandler={this.props.isDesktop ? this.props.clickHandler : null}/>;
    const part3 = <TextPart partId="healthPart3" description={this.props.healthDescription.slice(1, 2)}
      clickHandler={this.props.isDesktop ? this.props.clickHandler : null}/>;
    const bulletPoints = <BulletPoints bulletPoints={this.props.bulletPoints} addHeader={!this.props.isDesktop}/>;

    if (this.props.isDesktop) {
      return (
        <div className="honeyContent">
          <img id="honey1" className="honeyHealthImage" src={this.props.honeyPhoto1}/>
          <img id="honey2" className="honeyHealthImage" src={this.props.honeyPhoto2}/>
          {this.props.part === "1" ? part1 : part3}
          {bulletPoints}
        </div>
      )
    } else {
      return (
        <div className="honeyContent">
          <img id="honey1" className="honeyHealthImage" src={this.props.honeyPhoto1}/>
          {this.props.part === "1" && part1}
          {this.props.part === "2" && bulletPoints}
          {this.props.part === "3" && part3}
        </div>
      )
    }
  }
}

class BulletPoints extends React.Component {
  
  render() {
    return (
      <div className="listContainer">
        {this.props.addHeader && <span>Health Benefits Include:</span>}
        <ul className="healthFactsList">
          <li className="healthFact"> {this.props.bulletPoints.slice(0, 1)}</li>
          <li className="healthFact"> {this.props.bulletPoints.slice(1, 2)}</li>
          <li className="healthFact"> {this.props.bulletPoints.slice(2, 3)}</li>
          <li className="healthFact"> {this.props.bulletPoints.slice(3, 4)}</li>
          <li className="healthFact"> {this.props.bulletPoints.slice(4, 5)}</li>
        </ul>
      </div>
    )
  }
}

class TextPart extends React.Component {
  render () {
    return (
      <div id={this.props.partId} className="textPart" onClick={this.props.clickHandler}>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HoneyHealthPage;
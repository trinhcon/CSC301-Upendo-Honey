import React from 'react';
import "./honey-health.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import NextArrow from '../../modules/next-arrow';

// React librairies
import {Swipeable } from 'react-swipeable';
import { Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';

/**
 * This page contains health information about the honey.
 * Information about the health of honey and associated images
 * passed in hardcoded from the Content.js file.
 */
class HoneyHealthPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {redirectMenu: false, redirectHarvest: false, slide: 0}
  }

  swipeLeftHandler() { /** This Page contains slides to go through on mobile, increments */
    if (this.state.slide === 2) {
      this.setState({redirectMenu: true, redirectHarvest: false});
    } else {
      this.setState((state) => {
        return ({
          slide: state.slide + 1
        });
      });
    }
  }

  swipeRightHandler() { /** This Page contains slides to go through on mobile, decrements */
    if (this.state.slide === 0) {
      this.setState({redirectMenu: false, redirectHarvest: true});
    } else {
      this.setState((state) => {
        return ({
          slide: state.slide - 1
        });
      });
    }
  }

  clickHandler() { /** This function switches between two states 0 and 1 for desktop */
    if (this.state.slide === 0) {
      this.setState((state) => {
        return ({
          slide: state.slide + 1
        });
      });
    } else {
      this.setState((state) => {
        return ({
          slide: state.slide - 1
        });
      });
    }
  }

  async componentDidMount() {
    /** If arrived through URL, fetch resources */
    const { alphaCode } = this.props.match.params;
    await this.props.retrieveWithUrlCode(alphaCode);
  }

  render() {
    /** Note: This component holds the state of the slides, that state is
     * passed to the content components down the hierarchy*/
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
            content={this.props.headerName}
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <MediaQuery minDeviceWidth={"600px"}>
            <HoneyContent
              healthDescription={this.props.healthDescription}
              bulletPoints={this.props.bulletPoints}
              honeyPhoto1={this.props.honeyPhoto1}
              honeyPhoto2={this.props.honeyPhoto2}
              clickHandler={this.clickHandler}
              slide={this.state.slide}
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
              slide={this.state.slide}
              isDesktop={false}
            />
          </MediaQuery>
          <FlowFooter content="" footerClass="patternedFooter"/>
        </Swipeable>
      );
    }
  }
}

/**
 * Body Section of the page, contains pictures and information about
 * Honey.  This component changes dramatically in response to screen sizes.
 */
class HoneyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {parts: []};
  }

  setParts() { /** Generates components used for both mobile and desktop from the props passed in */
    const part1 = <TextPart partId="healthPart1" description={this.props.healthDescription[0]} isDesktop={this.props.isDesktop}/>;
    const part2 = <BulletPoints bulletPoints={this.props.bulletPoints} isDesktop={this.props.isDesktop}/>;
    const part3 = <TextPart partId="healthPart3" description={this.props.healthDescription[1]} isDesktop={this.props.isDesktop}/>;
    this.setState({parts: [part1, part2, part3]});
  }

  componentDidMount() {
    /**Store components from props*/
    this.setParts();
  }

  render() {
    if (this.props.isDesktop) {
      return (
        <div className="honeyContent">
          <img id="honey1" className="honeyHealthImage" src={this.props.honeyPhoto1} alt="Honey Comb Close-up"/>
          <img id="honey2" className="honeyHealthImage" src={this.props.honeyPhoto2} alt="Honey Comb held towards sun"/>
          {/* This displays two different lines of text depending on the current state */}
          {this.props.slide === 0 ? this.state.parts[0] : this.state.parts[2]}
          {/* This button switches between state zero and one to display two different parts of text */}
          <button id="switchTextHealth" onClick={this.props.clickHandler}>
            {this.props.slide === 0 ? "Click for more info" : "Go Back"} {/*Displays corresponding text depending on state*/}
          </button>
          {this.state.parts[1]}
        </div>
      )
    } else {
      return (
        <div className="honeyContent">
          <img id="honey1" className="honeyHealthImage" src={this.props.honeyPhoto1} alt="Honey Comb Close-up"/>
          {this.state.parts[this.props.slide]}
        </div>
      )
    }
  }
}

/**
 * List of Honey Facts
 */
class BulletPoints extends React.Component {
  
  render() {
    return (
      <div className="listContainerHealth">
        {!this.props.isDesktop && <span>Health Benefits Include:</span>}
        <ul className="healthFactsList">
          <li className="healthFact"> {this.props.bulletPoints[0]}</li>
          <li className="healthFact"> {this.props.bulletPoints[1]}</li>
          <li className="healthFact"> {this.props.bulletPoints[2]}</li>
          <li className="healthFact"> {this.props.bulletPoints[3]}</li>
          <li className="healthFact"> {this.props.bulletPoints[4]}</li>
        </ul>
        {!this.props.isDesktop && <p className="textPartInstructions">Swipe Me!</p>}
      </div>
    )
  }
}

/**
 * Text box or snippet describing a honey or Upendo Honey fact
 */
class TextPart extends React.Component {
  render () {
    return (
      <div id={this.props.partId} className="textPartHealth">
        <p>{this.props.description}</p>
        {!this.props.isDesktop && <p className="textPartInstructions">Swipe Me!</p>}
      </div>
    )
  }
}

export default HoneyHealthPage;
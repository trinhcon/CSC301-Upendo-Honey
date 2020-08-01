import React from 'react';
import "./honey-harvest.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import NextArrow from '../../modules/next-arrow';

// React librairies
import { Swipeable } from 'react-swipeable';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';

/**
 * This page contains harvest information about the honey.
 * Information about the harvest, logos and photos of the
 * harvesting process are passed in from the hardcoded
 * Content.js file.
 */
class HoneyHarvestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {
      redirectHoneyType: false,
      redirectHealth: false,
      slide: 0}
  }

  swipeLeftHandler() { /** This Page contains slides to go through on mobile, increments */
    if (this.state.slide === 2) {
      this.setState({redirectHealth: true, redirectHoneyType: false});
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
      this.setState({redirectHealth: false, redirectHoneyType: true});
    } else {
      this.setState((state) => {
        return ({
          slide: state.slide - 1
        });
      });
    }
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
    /** Note: This component holds the state of the slides, that state is
     * passed to the content components down the hierarchy*/
    if (this.state.redirectHoneyType) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/honey-type'}/>);
    } else if (this.state.redirectHealth){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/honey-health'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="honeyHarvestPage"
        >
          <FlowHeader
            content={this.props.headerName}
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <MediaQuery maxDeviceWidth={"600px"}>
            <HarvestContent
              harvestDescription={this.props.harvestDescription}
              harvestPhoto1={this.props.harvestPhoto1}
              harvestPhoto2={this.props.harvestPhoto2}
              medal1={this.props.medal1}
              medal2={this.props.medal2}
              slide={this.state.slide}
              isDesktop={false}
            />
          </MediaQuery>
          
          <FlowFooter content="" footerClass="patternedFooter"/>
          <MediaQuery minDeviceWidth={"600px"}>
            <HarvestContent
              harvestDescription={this.props.harvestDescription}
              harvestPhoto1={this.props.harvestPhoto1}
              harvestPhoto2={this.props.harvestPhoto2}
              medal1={this.props.medal1}
              medal2={this.props.medal2}
              slide={this.state.slide}
              isDesktop={true}
            />
            <FlowProgressBar position="two" flow="honeyProgress"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-health'} direction="right"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-type'} direction="left"/>
          </MediaQuery>
          
        </Swipeable>
      );
    }

  }
}

/**
 * Harvest content contains an explanation on the harvesting practices used
 * by Upendo Honey in organic Honey harvesting. This Component changes dramatically
 * in response the screen size.
 */
class HarvestContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {parts: []};
  }

  setParts() { /** Generates components used for both mobile and desktop from the props passed in */
    const part1 = <TextPart partId="part1" description={this.props.harvestDescription[0]} isDesktop={this.props.isDesktop}/>;
    const part2 = <TextPart partId="part2" description={this.props.harvestDescription[1]} isDesktop={this.props.isDesktop}/>;
    const part3 = <TextPart partId="part3" description={this.props.harvestDescription[2]} isDesktop={this.props.isDesktop}/>;
    this.setState({parts: [part1, part2, part3]});
  }

  componentDidMount() {
    /**Store components from props, only once on Mount*/
    this.setParts();
  }

  render() {

    if (this.props.isDesktop) {
      return (
        <div className="harvestContent">
          <img id="harvest1" className="honeyHarvestImage" src={this.props.harvestPhoto1} alt="Beekeeper on a branch about to harvest honey"/>
          <img id="harvest2" className="honeyHarvestImage" src={this.props.harvestPhoto2} alt="Beekeeper walking through Tanzanian Forest"/>
          {this.state.parts[0]}
          {this.state.parts[1]}
          {this.state.parts[2]}
          <MedalsBar medal1={this.props.medal1} medal2={this.props.medal2}/>
        </div>
      )
    } else {
      return (
        <div className="harvestContent">
          <MedalledImage
            imageSource={this.props.harvestPhoto1}
            medal1={this.props.medal1}
            medal2={this.props.medal2}
            medalled={this.props.slide === 2 ? true : false}/>
          {this.state.parts[this.props.slide]} {/*Displays corresponding text depending on state*/}
        </div>
      )
    }
  }
}

/**
 * Text box or snippet describing a honey or Upendo Honey fact
 */
class TextPart extends React.Component {
  render () {
    return (
      <div id={this.props.partId} className="textPartHarvest">
        <p>{this.props.description}</p>
        {!this.props.isDesktop && <p className="textPartInstructions">Swipe Me!</p>}
      </div>
    )
  }
}

/**
 * Image which has the certifications overlapping it
 */
class MedalledImage extends React.Component {
  render () {
    return (
      <div className="medalledImage">
        <img className="honeyHarvestImage" alt="Beekeeper walking across" src={this.props.imageSource}/>
        {this.props.medalled &&
          <MedalsBar medal1={this.props.medal1} medal2={this.props.medal2} />
        }
      </div>
    )
  }
}

/**
 * Contains a row of certifications that Upendo has received
 */
class MedalsBar extends React.Component {
  render() {
    return (
      <div className="medalsBar">
        <MedalIcon medalImage={this.props.medal1} altDescription="EU Organic Certification"/>
        <MedalIcon medalImage={this.props.medal2} altDescription="US Organic Certification"/>
      </div>
    )
  }
}

/**
 * Individual "Medal" component that contains logo of organization
 */
class MedalIcon extends React.Component {
  render () {
    return (
      <div className="medalContainer">
        <img alt={this.props.altDescription} src={this.props.medalImage} className="medalImage"/>
      </div>
    )
  }
}

export default HoneyHarvestPage;
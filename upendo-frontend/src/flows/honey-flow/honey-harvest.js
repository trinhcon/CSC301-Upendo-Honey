import React from 'react';

import "./honey-harvest.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import { Swipeable } from 'react-swipeable';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class HoneyHarvestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {
      redirectHoneyType: false,
      redirectHealth: false,
      part: "1"}
  }

  swipeLeftHandler() {
    if (this.state.part === "1") {
      console.log("On Two");
      this.setState({part: "2"});
    } else if (this.state.part === "2") {
      console.log("On Three")
      this.setState({part: "3"});
    } else {
      this.setState({redirectHoneyType: false, redirectHealth: true});
    }
  }

  swipeRightHandler() {
    if (this.state.part === "1") {
      this.setState({redirectHoneyType: true, redirectHealth: false});
    } else if (this.state.part === "2") {
      this.setState({part: "1"});
    } else {
      this.setState({part: "2"});
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
            content="Raw, Organic, Wild Honey"
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <MediaQuery maxDeviceWidth={"600px"}>
            <HarvestContent
              part={this.state.part}
              harvestDescription={this.props.harvestDescription}
              harvestPhoto1={this.props.harvestPhoto1}
              harvestPhoto2={this.props.harvestPhoto2}
              medal1={this.props.medal1}
              medal2={this.props.medal2}
              isDesktop={false}
            />
          </MediaQuery>
          
          <FlowFooter content="" footerClass="patternedFooter"/>
          <MediaQuery minDeviceWidth={"600px"}>
            <HarvestContent
              part={this.state.part}
              harvestDescription={this.props.harvestDescription}
              harvestPhoto1={this.props.harvestPhoto1}
              harvestPhoto2={this.props.harvestPhoto2}
              medal1={this.props.medal1}
              medal2={this.props.medal2}
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

class HarvestContent extends React.Component {

  render() {
    const part1 = <TextPart partId="part1" description={this.props.harvestDescription.slice(0, 1)} isDesktop={this.props.isDesktop}/>;
    const part2 = <TextPart partId="part2" description={this.props.harvestDescription.slice(1, 2)} isDesktop={this.props.isDesktop}/>;
    const part3 = <TextPart partId="part3" description={this.props.harvestDescription.slice(2, 3)} isDesktop={this.props.isDesktop}/>;

    if (this.props.isDesktop) {
      return (
        <div className="harvestContent">
          <img id="harvest1" className="honeyHarvestImage" src={this.props.harvestPhoto1}/>
          <img id="harvest2" className="honeyHarvestImage" src={this.props.harvestPhoto2}/>
          {part1}
          {part2}
          {part3}
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
            medalled={this.props.part === "3" ? true : false}/>
          {this.props.part === "1" && part1}
          {this.props.part === "2" && part2}
          {this.props.part === "3" && part3}
        </div>
      )
    }
  }
}

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
import React from 'react';

import "./tanzania-forest.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import {Swipeable } from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

// Icons for the page
import MapIcon from '../../images/map.png';
import ElephantIcon from '../../images/elephant.png';
import BeekeeperIcon from '../../images/Beekeeper.png';
import FlowerIcon from '../../images/flower.png';

class TanzaniaForestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectMap: false}
  }

  swipeLeftHandler() {
    this.setState({redirectMenu: true, redirectMap: false});
  }

  swipeRightHandler() {
    this.setState({redirectMenu: false, redirectMap: true});
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
    } else if (this.state.redirectMap){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/tanzania-map'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="forestPage"
        >
          <FlowHeader
            content={this.props.headerName}
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <img src={this.props.forestPhoto}
            className="forestImage"
            alt="Forest in Tanzania"
          />
          
          <ForestFact forestFactIcon={MapIcon}
            factType="areaIcon"
            factHeader={"Total Area: "}
            factText={this.props.area+"ha"}/>
          <ForestFact forestFactIcon={ElephantIcon} /** ADD ICON */
            factType="animalIcon"
            factHeader={"Animals: "}
            factText={this.props.animals}/>
          <MediaQuery maxDeviceWidth={"600px"}>
            <ForestFact forestFactIcon={BeekeeperIcon} /** ADD ICON */
              factType="beekeeperIcon"
              factHeader={"Beekeepers: "}
              factText={this.props.bkCount}/>
          </MediaQuery>
          <ForestFact forestFactIcon={FlowerIcon} /** ADD ICON */
            factType="plantIcon"
            factHeader={"Flowering Plants: "}
            factText={this.props.plants}/>
          
          <MediaQuery minDeviceWidth={"600px"}>
            <ForestFact forestFactIcon={BeekeeperIcon} /** ADD ICON */
              factType="beekeeperIcon"
              factHeader={"Beekeepers: "}
              factText={this.props.bkCount + " beekeepers hard at work"}/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'} direction="right"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/tanzania-map'} direction="left"/>
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

class ForestFact extends React.Component {

  render() {
    return (
      <div className="forestFact" id={this.props.factType + "Container"}>
        <img className="forestFactIcon" alt={this.props.factHeader} src={this.props.forestFactIcon} id={this.props.factType}/>
        <p className="forestFactText">
          <span className="forestFactHeader">{this.props.factHeader}</span>
          {this.props.factText}
        </p>
      </div>
    );
  }
}

export default TanzaniaForestPage;
import React from 'react';
import "./tanzania-forest.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import NextArrow from '../../modules/next-arrow';

// React Librairies
import {Swipeable } from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';

// Icons for the page
import MapIcon from '../../images/map.png';
import ElephantIcon from '../../images/elephant.png';
import BeekeeperIcon from '../../images/Beekeeper.png';
import FlowerIcon from '../../images/flower.png';

/**
 * Page that contains information about the forest
 * where the honey comes from including an image of the forest
 * size, plants, animals, and number of beekeepers passed in
 * from the database.
 */
class TanzaniaForestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectMap: false}
  }

  swipeLeftHandler() { /** Redirect to the Next Page */
    this.setState({redirectMenu: true, redirectMap: false});
  }

  swipeRightHandler() { /** Redirect to previous page */
    this.setState({redirectMenu: false, redirectMap: true});
  }

  async componentDidMount() { /** If arrived through URL, fetch resources */
    const { alphaCode } = this.props.match.params;
    await this.props.retrieveWithUrlCode(alphaCode);
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
            alt="Forest reserve where your honey came from"
          />
          
          <ForestFact forestFactIcon={MapIcon}
            factType="areaIcon"
            factHeader={this.props.areaFactHeader}
            factText={this.props.area + this.props.areaUnit}/>
          <ForestFact forestFactIcon={ElephantIcon} /** ADD ICON */
            factType="animalIcon"
            factHeader={this.props.animalFactHeader}
            factText={this.props.animals}/>
          <MediaQuery maxDeviceWidth={"600px"}>
            <ForestFact forestFactIcon={BeekeeperIcon} /** ADD ICON */
              factType="beekeeperIcon"
              factHeader={this.props.beekeeperFactHeader}
              factText={this.props.bkCount}/>
          </MediaQuery>
          <ForestFact forestFactIcon={FlowerIcon} /** ADD ICON */
            factType="plantIcon"
            factHeader={this.props.plantFactHeader}
            factText={this.props.plants}/>
          
          <MediaQuery minDeviceWidth={"600px"}>
            <ForestFact forestFactIcon={BeekeeperIcon} /** ADD ICON */
              factType="beekeeperIcon"
              factHeader={this.props.beekeeperFactHeader}
              factText={this.props.bkCount + this.props.beekeeperFactText}/>
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

/**
 * React class that holds a forest fact with an icon image
 * before it.
 */
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
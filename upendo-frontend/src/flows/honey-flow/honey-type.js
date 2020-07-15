import React from 'react';

import "./honey-type.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import {Swipeable } from 'react-swipeable';
import { Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';
import RecipeBook from '../../images/recipe-book.png';

class HoneyTypePage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectHarvest: false}
  }

  swipeLeftHandler() {
    this.setState({redirectMenu: false, redirectHarvest: true});
  }

  swipeRightHandler() {
    this.setState({redirectMenu: true, redirectHarvest: false});
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
        className="honeyTypePage"
        >
          <FlowHeader content="Your New Favourite Honey"
            headerClass="greenStrip"
            textStyle="greenStripText"
          />

          <div id="honeyCommentContainer">
            <p id="honeyTypeComment">
              {this.props.varietyMessage}
            </p>
          </div>

          <img src={this.props.jarPhoto} id="realHoneyJar"/> 
          <div id="honeyDescriptionContainer">
            <p id="honeyTypeDescription"> {this.props.honeyDescription} </p>
          </div>

          <HoneyRecipe
            recipeText="Need some sweet ideas? Click on the recipe book for inspiration!"
            recipeIcon={RecipeBook}
          />
          <MediaQuery minDeviceWidth={"600px"}>
            <FlowProgressBar position="one" flow="honeyProgress"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-harvest'} direction="right"/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'} direction="left"/>
          </MediaQuery>
          <FlowFooter content="" footerClass="patternedFooter"/>

        </Swipeable>
      );
    }

  }
}

class HoneyRecipe extends React.Component {
  
  render() {
    return (
      <div className="recipe">
        <a href="http://recipe.upendoagri.com">
          <img src={this.props.recipeIcon}
            className="recipeIcon"
            alt="recipe icon"
          />
        </a>
        <p className="recipeDescription">
          {this.props.recipeText} 
        </p>
      </div>
    );
  }
}

export default HoneyTypePage;
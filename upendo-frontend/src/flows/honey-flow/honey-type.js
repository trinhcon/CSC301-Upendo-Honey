import React from 'react';

import "./honey-type.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import {Swipeable } from 'react-swipeable';
import { Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

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
          <FlowHeader content="Your new favourite honey"
            headerClass="greenHeader"
            textStyle="whiteBree"
          />

          <p className="honeyTypeComment">
            {this.props.honeyTypeComment}
          </p>

          {/**  Linda
            You probably will want to structure Desktop vs.
            Mobile differently for this one, so I'll stop
            structuring too much here
          */}
          <img src={""} /** ADD ICON */ className="realHoneyJar"/> 

          <HoneyRecipe
            recipeIcon={""} /** ADD ICON */
            recipeText="Need some sweet ideas? Click on the recipe book for inspiration!"
          />

          <FlowFooter content=""
            footerClass="greenFooter"
          />



          <MediaQuery minDeviceWidth={"600px"}>
            <FlowProgressBar position="one"
              icon="honeyJar" /** Need to take in parameter, edit FlowProgressBar */
            />
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-harvest'}/>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={"600px"}>
            <p> place holder {/** If Media Query is empty, raises error */} </p> 



          </MediaQuery>
        </Swipeable>
      );
    }

  }
}

class HoneyRecipe extends React.Component {
  
  render() {
    return (
      <div className="recipe">
        <img src={this.props.recipeIcon}
          className="recipeIcon"
          alt="recipe icon"
        />
        <p className="recipeDescription">
          {this.props.recipeText} 
        </p>
      </div>
    );
  }
}

export default HoneyTypePage;
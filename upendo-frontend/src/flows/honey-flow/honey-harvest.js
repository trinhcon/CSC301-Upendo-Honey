import React from 'react';

import "./honey-harvest.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import {Swipeable } from 'react-swipeable';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class HoneyHarvestPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectHoneyType: false, redirectHealth: false}
  }

  swipeLeftHandler() {
    this.setState({redirectHoneyType: false, redirectHealth: true});
  }

  swipeRightHandler() {
    this.setState({redirectHoneyType: true, redirectHealth: false});
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
            content="Raw, organic, wild honey"
            headerClass="greenHeader"
            textStyle="whiteBree"
          />
            {/**
              This one will likely also require significant editing
              because it looks quite bad on desktop right now
              Here:

              <img src={} alt="USDA Certification Icon"/>
              <img src={} alt="leaf icon"/>

              <p>
                Wild bees move with the flowering season of the forest:
                governed by the natural rhythms of rain, fire and rejuvenation
              </p>

              <p>
                This honey is harvested from native forests in the heart of
                Africa; not farmed from bees kept in hives, year on year
              </p>



            */}
          <FlowFooter
            content=""
            footerClass="greenFooter"
          />

          <MediaQuery minDeviceWidth={"600px"}>
            <FlowProgressBar position="two"
              icon="honeyJar" /** Need to take in parameter, edit FlowProgressBar */
            />
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/honey-health'}/>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={"600px"}>

            <p> place holder {/** If Media Query is empty, raises error */} </p> 

          </MediaQuery>
        </Swipeable>
      );
    }

  }
}

export default HoneyHarvestPage;
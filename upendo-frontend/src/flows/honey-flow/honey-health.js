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
    this.state = {redirectMenu: false, redirectHarvest: false}
  }

  swipeLeftHandler() {
    this.setState({redirectMenu: true, redirectHarvest: false});
  }

  swipeRightHandler() {
    this.setState({redirectMenu: false, redirectHarvest: true});
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
            headerClass="greenHeader"
            textStyle="whiteBree"
          />

          {/** Again I won't structure too much because you may change a lot*/}

          <img
            src={""} /** Insert image here */
            className="healthPhoto"
          />


          {/** For CSS  LOOKUP (google):  "css list-style-image"
            To help with making the bullet points bees
          */} 
          <ul className="healthFactsList">
            <li className="healthFact"> High in antioxidants</li>
            <li className="healthFact"> Antibacterial and antifungal</li>
            <li className="healthFact"> Disinfect wounds</li>
            <li className="healthFact"> A potent probiotic</li>
            <li className="healthFact"> Soothes a sore throat</li>
          </ul>

          <FlowFooter
            content=""
            footerClass="greenFooter"
          />

          <MediaQuery minDeviceWidth={"600px"}>
            <FlowProgressBar position="three"
              icon="honeyJar" /** Need to take in parameter, edit FlowProgressBar */
            />

            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'}/>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={"600px"}>
            <p> place holder {/** If Media Query is empty, raises error */} </p> 


          </MediaQuery>
        </Swipeable>
      );
    }

  }
}

export default HoneyHealthPage;
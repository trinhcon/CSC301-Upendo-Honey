import React from 'react';

import "./tanzania-forest.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import {Swipeable } from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

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
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/tanzania-map'}/>);
    } else if (this.state.redirectForest){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="forestPage"
        >
          <FlowHeader
            content="Mpanda Line Forest Reserve"
            headerClass="greenHeader"
            textStyle="whiteBree"
          />

          <img src={this.props.forestImage}
            className="forestImage"
            alt="Forest in Tanzania"
          />

          <FlowFooter
            content=""
            footerClass="greenFooter"
          />


          <MediaQuery minDeviceWidth={"600px"}>
            {/** you probably have to use ids to correctly
              position the Forest Facts differently on Desktop
             */}


            <ForestFact forestFactIcon={""} /** ADD ICON */
              factHeader={"Total Area:"}
              factText={"720,000ha"}/>
            <ForestFact forestFactIcon={""} /** ADD ICON */
              factHeader={"Animals:"}
              factText={"Elephants, Chimpanzees, Toucan"}/>
            <ForestFact forestFactIcon={""} /** ADD ICON */
              factHeader={"Beekeepers:"}
              factText={"520"}/>
            <ForestFact forestFactIcon={""} /** ADD ICON */
              factHeader={"Flowering Plants:"}
              factText={"Mnonda, Acacia, Daisies"}/>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'}/>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={"600px"}>
             {/**
                Feel Free to not use a list and just copy from above instead
                but I feel a list is more useful and you can just style it
                slightly differently (resize on mobile)
              */}
            <ul className="forestFactList">
              <li>
                <ForestFact forestFactIcon={""} /** ADD ICON */
                  factHeader={"Total Area:"}
                  factText={"720,000ha"}/>
              </li>
              <li>
                <ForestFact forestFactIcon={""} /** ADD ICON */
                  factHeader={"Animals:"}
                  factText={"Elephants, Chimpanzees, Toucan"}/>
              </li>
              <li>
                <ForestFact forestFactIcon={""} /** ADD ICON */
                  factHeader={"Beekeepers:"}
                  factText={"520"}/>
              </li>
              <li>
                <ForestFact forestFactIcon={""} /** ADD ICON */
                  factHeader={"Flowering Plants:"}
                  factText={"Mnonda, Acacia, Daisies"}/>
              </li>

            </ul>
          </MediaQuery>

        </Swipeable>
      );
    }

  }
}

class ForestFact extends React.Component {

  render() {
    return (
      <div className="forestFact">
        <img src={this.forestFactIcon}
          class="forestFactIcon"
          alt={this.props.factHeader}
        />
        <p className="forestFactText">
          <span className="forestFactHeader">{this.props.factHeader}</span>
          {this.props.factText}
        </p>
      </div>
    );
  }
}

export default TanzaniaForestPage;
import React from 'react';

import "./tanzania-map.css";
import FlowHeader from '../../modules/header';
import {Swipeable} from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class TanzaniaMapPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectForest: false}
  }

  swipeLeftHandler() {
    this.setState({redirectMenu: false, redirectForest: true});
  }

  swipeRightHandler() {
    this.setState({redirectMenu: true, redirectForest: false});
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
    } else if (this.state.redirectForest){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/tanzania-forest'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
        className="mapPage"
        >
        {/** Google Map API */}

          <MediaQuery minDeviceWidth={"600px"}>
            <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/tanzania-forest'}/>

            
          </MediaQuery>
          <MediaQuery maxDeviceWidth={"600px"}>
          <p> place holder {/** If Media Query is empty, raises error */} </p> 

          
          </MediaQuery>
        </Swipeable>
      );
    }

  }
}

/*
class TanzaniaMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.95, /** Tanzania Coordinates */
        lng: 30.33
      },
      zoom:11       /** Map Zoom */
    }
  }

  render() {
    {/** NOTE Map MUST have a container with an explicit size in CSS *}
    return (
      <div id="tanzaniaForestMapContainer"> 
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyAnxs16mCrI1dNW-I1ErjEPonHRROke9Fk"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <div id="forestOutline"
            lat={59.955413}   /** Forest Outline's Corner *
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}



*/
export default TanzaniaMapPage;
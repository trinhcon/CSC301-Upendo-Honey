import React from 'react';

import "./tanzania-map.css";
import FlowHeader from '../../modules/header';
import {Swipeable} from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

import Outline from '../../scripts/mpanda_outline.kml';
import Beekeeper from '../../images/Beekeeper.png';


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
        <TanzaniaMap> </TanzaniaMap>

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


class TanzaniaMap extends React.Component {
  constructor(props) {
    super(props);
    this.getGoogleMap = this.getGoogleMap.bind(this);
    //this.kmlApiHandler = this.kmlApiHandler.bind(this);
    this.state = {
      center: {
        lat: -5.530581224999935,     /** Tanzania Coordinates */
        lng: 31.674771946000078
      },
      zoom:8 ,               /** Map Zoom */
      map: null,
      kml: null,
      style: {
        width: '400px',
        height: '400px',
      }
    }
    this.src = '../../scripts/mpanda_outline.kml';
    this.map = <div id="map"/>;

  }

  getGoogleMap() {
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        window.resolveGoogleMapsPromise = () => {
          resolve(window.google);

          delete window.resolveGoogleMapsPromise;
        }

        const script = document.createElement("script");
        const API = "AIzaSyAnxs16mCrI1dNW-I1ErjEPonHRROke9Fk";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;

        document.body.appendChild(script);
      })
    }
    return this.googleMapsPromise;
  }

  componentWillMount() {
    this.getGoogleMap();
  }

  componentDidMount() {
    this.getGoogleMap().then((google) => {
      console.log("Google:", google);
      console.log(this.state);
      var map = new google.maps.Map(document.getElementById("map"), {
        center: this.state.center,
        zoom: this.state.zoom,
      });
      
      /** KML file MUST be available publicly to google, local files do not work */
      var kml = new google.maps.KmlLayer("https://a.uguu.se/LBfGWbiu1V22_mpanda_outline.kml", {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });
      this.setState({map: map, kml: kml});
    });
  }


  render() {
    {/** NOTE Map MUST have a container with an explicit size in CSS */}
    return (
      <div id="tanzaniaForestMapContainer"> 
      
        <div id="map" style={this.state.style /** CANNOT REMOVE Google API Requirement */}/>
      </div>
    );
  }
}

export default TanzaniaMapPage;
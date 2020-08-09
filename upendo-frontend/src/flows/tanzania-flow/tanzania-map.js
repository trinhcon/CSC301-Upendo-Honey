import React from 'react';
import "./tanzania-map.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import NextArrow from '../../modules/next-arrow';

// React Librairies
import {Swipeable} from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';


/**
 * Page contains an interactive map that shows the
 * location of the forest using a google map api. The page
 * is passed a kml file from the database.
 */
class TanzaniaMapPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.state = {redirectMenu: false, redirectForest: false}
  }

  swipeLeftHandler() { /** Redirect to the Next Page */
    this.setState({redirectMenu: false, redirectForest: true});
  }

  swipeRightHandler() { /** Redirect to previous menu */
    this.setState({redirectMenu: true, redirectForest: false});
  }

  async componentDidMount() { /** If arrived through URL, fetch resources */
    const { alphaCode } = this.props.match.params;
    if ((typeof alphaCode !== undefined) && !this.props.getDataStatus()){
        await this.props.setAlphaCode(alphaCode);
        await this.props.retrieveAppData();
    }
}

  render() {
    if (this.state.redirectMenu) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/>);
    } else if (this.state.redirectForest){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/tanzania-forest'}/>);
    } else {
      return (
        <div>
          <MediaQuery maxDeviceWidth={"600px"}>
            <div
              className="mapPage"
            >
              <Swipeable 
                onSwipedLeft={this.swipeLeftHandler}
                onSwipedRight={this.swipeRightHandler}
              >
                <FlowHeader
                  content={this.props.headerName}
                  headerClass="greenStrip"
                  textStyle="greenStripText"
                />
          
                <div id="mapTextContainer"
                >
                  <h3 id="mapDescription"> {this.props.mapDescription} </h3>
                  <p id="mapInstructions"> {this.props.mapInstructions} </p>
                </div>

              </Swipeable>
            
              <TanzaniaMap
                mapConfig={this.props.mapConfig}
                mapKML={this.props.mapKML}
                APIKey={this.props.APIKey}
                src={this.props.src}
                >
              </TanzaniaMap>
              <Swipeable 
              onSwipedLeft={this.swipeLeftHandler}
              onSwipedRight={this.swipeRightHandler}
              >
                <FlowFooter
                  content=""
                  footerClass="patternedFooter"
                />
              </Swipeable>
            </div>
          </MediaQuery>


          <MediaQuery minDeviceWidth={"600px"}>
            <div
              className="mapPage"
            >
              <FlowHeader
                content={this.props.headerName}
                headerClass="greenStrip"
                textStyle="greenStripText"
              />
          
              <div id="mapTextContainer"
              >
                <h3 id="mapDescription"> {this.props.mapDescription} </h3>
                <p id="mapInstructions"> {this.props.mapInstructions} </p>
              </div>
              <TanzaniaMap
                mapConfig={this.props.mapConfig}
                mapKML={this.props.mapKML}
                APIKey={this.props.APIKey}
                src={this.props.src}
                >
              </TanzaniaMap>
              <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/tanzania-forest'} direction="right"/>
              <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/menu'} direction="left"/>

              <FlowFooter
              content=""
              footerClass="patternedFooter"
              />
            </div>
          </MediaQuery>
        </div>
      );
    }

  }
}

/**
 * Objects that retrieves and contains the interactive
 * google map.
 */
class TanzaniaMap extends React.Component {
  constructor(props) {
    super(props);
    this.getGoogleMap = this.getGoogleMap.bind(this);
    this.state = {map: null, kml: null};
  }

  /** Google map is either made or retrieved */
  getGoogleMap() {
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        window.resolveGoogleMapsPromise = () => {
          resolve(window.google);

          delete window.resolveGoogleMapsPromise;
        }

        const script = document.createElement("script");
        script.src = this.props.src;
        script.async = true;

        document.body.appendChild(script);
      })
    }
    return this.googleMapsPromise;
  }

  /** Triggers function which imports the API and returns the Promise */
  componentWillMount() {
    this.getGoogleMap();
  }

  /** If mounted, create the google map from the api*/
  componentDidMount() {
    this.getGoogleMap().then((google) => {
      var map = new google.maps.Map(document.getElementById("map"), this.props.mapConfig);
      
      /** KML file MUST be available publicly to google, local files do not work */
      var kml = new google.maps.KmlLayer(this.props.mapKML , {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });

      /** Saves map & kml if neccessary for future manipulations */
      this.setState({map: map, kml: kml});
    });
  }


  render() {
    return (
      <div id="tanzaniaForestMapContainer"> 
        <div id="map"/>
      </div>
    );
  }
}

export default TanzaniaMapPage;
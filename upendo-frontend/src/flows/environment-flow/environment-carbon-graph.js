import React from 'react';
import "./environment-carbon-graph.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import NextArrow from '../../modules/next-arrow';
import FlowProgressBar from '../../modules/progress-bar';
import BulletPoints from '../../modules/bullet-points';

// React librairies
import {Swipeable} from 'react-swipeable';
import {Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import ReactGA from 'react-ga';

// JS librairies
import Chart from 'chart.js';

// Imported Image
import CarbonFootprint from '../../images/CO2.png'


/**
 * Page that displays graphs and description that compare the
 * carbon footprint of Tanzanian honey and locally sourced
 * honey.  Retrieves hardcoded data, graph labels and headers/text.
 */
class EnvironmentCarbonGraphPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.swipeRightHandler = this.swipeRightHandler.bind(this);
    this.incrementSlide = this.incrementSlide.bind(this);
    this.decrementSlide = this.decrementSlide.bind(this);
    this.state = {redirectForest: false, redirectNetCarbon: false, slideNumber: 0}
  }
  
  swipeLeftHandler() { /** Redirect to the Next Page */
    this.setState({redirectNetCarbon: true, redirectForest: false});
  }
  
  swipeRightHandler() { /** Redirect to the Previous Page */
    this.setState({redirectNetCarbon: false, redirectForest: true});
  }

  decrementSlide() { /** Decrements slide number, if successful returns true */
    let decremented = false;
    // Check if we are going to go below zero
    if (this.state.slideNumber > 0) {
      this.setState((state) => {
        return ({
          slideNumber: state.slideNumber - 1
        });
      });
      decremented = true;
    }
    return decremented;
  }

  incrementSlide() { /** Increments slide number, if successful returns true */
    let incremented = false;
    // Check if we are going to go above max
    if (this.state.slideNumber < 3) {
      this.setState((state) => {
        return ({
          slideNumber: state.slideNumber + 1
        });
      });
      incremented = true;
    }
    return incremented;
  }
  
  async componentDidMount() { /** If arrived through URL, fetch resources */
    const { alphaCode } = this.props.match.params;
    if ((typeof alphaCode !== undefined) && !this.props.getDataStatus()){
        await this.props.setAlphaCode(alphaCode);
        await this.props.retrieveAppData();
    }
  }

  render() {
    const slideText = this.props.text[this.state.slideNumber];

    if (this.state.redirectNetCarbon) {
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/environment-net-carbon'}/>);
    } else if (this.state.redirectForest){
      return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/environment-forest'}/>);
    } else {
      return (
        <Swipeable onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}  
        className="environmentCarbonGraphPage"
        >
        <FlowHeader
          content={this.props.headers[this.state.slideNumber]}
          headerClass="greenStrip"
          textStyle="greenStripText"
        />
        
        <EnvironmentGraph
          labels={this.props.labels}
          data={this.props.data}
          slideNumber={this.state.slideNumber}
          incrementSlide={this.incrementSlide}
          decrementSlide={this.decrementSlide}

          graphOptions={this.props.graphOptions}
        />
        <div className="environmentCarbonGraphText">
          {// Only bullets if on slides 0-2
          this.state.slideNumber < 3 ?
          <BulletPoints bulletStyle="beeBullet" points={slideText}/> :
          <p>{slideText[0]}</p>}

          {// Only displays if we are on the last slide
          this.state.slideNumber === 3 &&
          <div className="environmentMoreInfo">
            <p className="environmentMoreInfoText">{slideText[1]}</p>
            <ReactGA.OutboundLink
              eventLabel="Carbon"
              to={this.props.link}
              target="_blank">
              <img alt="Foot print to find out more" src={CarbonFootprint} className="environmentIcon"/>
            </ReactGA.OutboundLink>
          </div>}
        </div>

        <MediaQuery minDeviceWidth="600px">
          <FlowProgressBar position="two" flow="environmentProgress"/>
          <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/environment-net-carbon'} direction="right"/>
          <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/environment-forest'} direction="left"/>
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
 * Generates and updates the graph using data passed
 * in from App.js.
 */
class EnvironmentGraph extends React.Component {
  constructor(props) {
    super(props);
    this.popDataEntry = this.popDataEntry.bind(this);
    this.pushDataEntry = this.pushDataEntry.bind(this);
    
    // Stores data for graph, labels and whether skude buttons are enabled
    this.state = {graph: null,
      labels: [...this.props.labels],
      tanzania: JSON.parse(JSON.stringify(this.props.data[0])),
      domestic: JSON.parse(JSON.stringify(this.props.data[1])),
      enablePrev: false,
      enableNext: true,
    };
  }

  /** Loads the graph into #environmentGraph */
  componentDidMount(){
    var ctx = document.getElementById('environmentCarbonGraph');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          /** Uses state to initialize values into the graph */
          labels: this.state.labels,
          datasets: [
            this.state.tanzania,
            this.state.domestic
          ]
      },
      options: this.props.graphOptions,

    });

    /** Preemptively remove data from chart To begin on slide 1*/
    this.graph = myChart;
    for (let i = 0; i < this.graph.data.datasets.length; i++) {
      for (let j = 1; j < this.props.labels.length; j++) {
        this.graph.data.datasets[i].data[j] = 0;
      }
    }

    /** Also Removed the labels on charts*/
    for (let k = 1; k < this.graph.data.labels.length; k++) {
      this.graph.data.labels[k] = "";
    }

    /** Updated the graph and component state */
    this.graph.update();
  }

  /**
   * Removes a data entry from the graph to go back
   */
  popDataEntry(){
    /** Decrement slide state */
    if (this.props.decrementSlide()) {
      // If successful, enables the Next button and updates slide number
      this.setState({enableNext: true});
      let newSlideNumber = this.props.slideNumber;
  
      /** Goes into the graph object and makes a modification to stored values */
      for (let i = 0; i < this.graph.data.datasets.length; i++) {
        this.graph.data.datasets[i].data[newSlideNumber] = 0; /** Prevents value from appearing */
      }
      this.graph.data.labels[newSlideNumber]= ""; /** Removes label from chart */
      /** Causes the graph to visually update based on new values */
      this.graph.update();
    } else {
      // Otherwise, disables button to go back
      this.setState({enablePrev: false});
    };
  }

  pushDataEntry(){
    /** Increment slide state */
    if (this.props.incrementSlide()) {
      // If successful, enables to previous button and updates slide number
      this.setState({enablePrev: true});
      let newSlideNumber = this.props.slideNumber + 1;
      /** Goes into the graph object and makes a modification to stored values */
      for (let i = 0; i < this.graph.data.datasets.length; i++) {
        this.graph.data.datasets[i].data[newSlideNumber] = this.props.data[i].data[newSlideNumber];
      }
      this.graph.data.labels[newSlideNumber] = this.props.labels[newSlideNumber];

      /** Causes the graph to visually update based on new values */
      this.graph.update();
    } else {
      // Otherwise disables button to go forward
      this.setState({enableNext: false});
    }
  }

  render() {
    return (
      <div className="environmentCarbonGraphContainer">
        <canvas id="environmentCarbonGraph"/>
        <div className="graphButtonContainer">
          <button onClick={this.popDataEntry} disabled={!this.state.enablePrev} className="graphButton"> Prev </button>
          <button onClick={this.pushDataEntry} disabled={!this.state.enableNext} className="graphButton"> Next </button>
        </div>
      </div>
    );
  }
}

export default EnvironmentCarbonGraphPage;
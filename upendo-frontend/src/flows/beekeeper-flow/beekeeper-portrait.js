import React from 'react';

import "./beekeeper-portrait.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

class BeekeeperPage extends React.Component {
  constructor(props) {
    super(props);
    this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
    this.state = {redirectLetter: false};

  }

  swipeLeftHandler(eventData) {
    this.setState({redirectLetter:true});
    console.log("picu slided");
  }

  render() {
    if (this.state.redirectLetter) {
      return (<Redirect to='/beekeeper-letter'/>);
    } else {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="beekeeperFlexContainer">
          <Swipeable onSwipedLeft={this.swipeLeftHandler}
          >

            <FlowHeader content="This is the Header" headerClass="blueStrip"
=======
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
          <Swipeable onSwipedLeft={this.swipeLeftHandler} className="beekeeperFlexContainer"
          >

            <FlowHeader content="Meet your Beekeeper" headerClass="blueStrip"
<<<<<<< HEAD
>>>>>>> Touched up mobile designs (flexbox, spacing)
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
              textStyle="blueStripText"
            />
            <BeekeeperPortrait beekeeperName={this.props.beekeeperName}
              imageURL={this.props.imageURL}/>
            <BeekeeperDescriptionContainer
              content={this.props.beekeeperDescription}/>
            <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
            </Swipeable>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
=======
>>>>>>> Touched up mobile designs (flexbox, spacing)
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
      );
    }

  }
}

class BeekeeperPortrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portrait">
        <div className="portraitShape" >
          <img className="portraitImage" src={this.props.imageURL}/>
        </div>
       <figcaption className="portraitCaption">
        {this.props.beekeeperName}
       </figcaption> 
      </div>
    );
  }
}

class BeekeeperDescriptionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Bee"></div>
        <div className="verticalBar"></div>
        <p className="description"> {this.props.content}</p>
        <p footer></p>
      </div>
      
    );
  }
}





export default BeekeeperPage;
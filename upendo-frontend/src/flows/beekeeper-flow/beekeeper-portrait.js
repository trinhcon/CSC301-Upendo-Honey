import React from 'react';

import "./beekeeper-portrait.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';

class BeekeeperPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.state.redirectLetter) {
      return (<Redirect to='/beekeeper-letter'/>);
    } else {
      return (
          <Swipeable onSwipedLeft={this.swipeLeftHandler} className="beekeeperFlexContainer"
          >

            <FlowHeader content="Meet your Beekeeper" headerClass="blueStrip"
              textStyle="blueStripText"
            />
            <BeekeeperPortrait beekeeperName={this.props.beekeeperName}
              imageURL={this.props.imageURL}/>
            <BeekeeperDescriptionContainer
              content={this.props.beekeeperDescription}/>
            <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
            </Swipeable>
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
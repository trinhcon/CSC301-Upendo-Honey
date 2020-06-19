import React from 'react';

class BeekeeperContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <BeekeeperPortrait beekeeperName={this.props.beekeeperName}
        imageURL={this.props.imageURL}/>
      <BeekeeperDescriptionContainer
        content={this.props.beekeeperDescription}/>
      </div>
    );
  }
}

class BeekeeperPortrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.imageURL}/>
        <h4>{this.props.beekeeperName}</h4>
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





export default BeekeeperContainer;
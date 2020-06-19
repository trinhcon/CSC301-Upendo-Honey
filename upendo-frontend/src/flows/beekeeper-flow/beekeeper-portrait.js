const { render } = require("@testing-library/react")

class BeekeeperPortrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={props.imageURL}/>
        <h4>{this.props.beekeepername}</h4>
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


class BeekeeperContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BeekeeperPortrait beekeepername={this.props.beekeepername}
        imageURL={this.props.imageURL}></BeekeeperPortrait>
      <BeekeeperDescriptionContainer
        content={this.props.beekeeperDescription}/>
    );
  }
}
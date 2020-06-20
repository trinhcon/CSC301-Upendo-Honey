import React from 'react';
import "./landing-page.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landingPage">
        <LandingPageFormBox />
      </div>
    );
  }
}

class LandingPageFormBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landingPageBox">
        <h2 id="codeBoxHeader">Trace Your Honey ... </h2>
        <p id="codeBoxHeaderSub"> ... right back to the forest</p>
        <LandingPageForm />
        <hr></hr>
        <p id="autoCode">No Code? No worries! Enter "PUREJOY" to start your adventure.</p>

      </div>
    );
  }
}

class LandingPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: ''};
    this.handleCodeSubmission = this.handleCodeSubmission.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleCodeSubmission() {

  }

  handleInput (e) {
    this.setState({code: e.target.value});

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleCodeSubmission}>
          <label for="codeSearch"> Enter Your Jar's Code: </label>
          <input type="text" value={this.state.code} onChange={this.handleInput}
            placeholder="Type Your Code Here!" name="codeSearch" id="inputForm"/>
          <input type="submit" value="Go" id="submitButton"/>
        </form>
      </div>
    );
  }
}


export default LandingPage;
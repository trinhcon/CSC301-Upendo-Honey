import React from 'react';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
      <div>
        <h3 id="codeBoxHeader">Trace Your Honey</h3>
        <p id="codeBoxHeaderSub"> ... right back to the forest</p>
        <LandingPageForm />
        <hr></hr>
        <p>No Code? No worries! Enter "PUREJOY" to start your adventure.</p>

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
          <label for="codeSearch"> Enter Code: </label>
          <input type="text" value={this.state.code} onChange={this.handleInput}
            placeholder="Type Your Code Here!" name="codeSearch"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}


export default LandingPage;
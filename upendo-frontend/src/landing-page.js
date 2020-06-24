import React from 'react';
import "./landing-page.css";
import { retrieveBatchMember } from './modules/apiCalls';
import { Redirect } from 'react-router-dom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landingPage">
        <LandingPageFormBox getData={this.props.getData}/>
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
        <LandingPageForm getData={this.props.getData}/>
        <hr></hr>
        <p id="autoCode">No Code? No worries! Enter "PUREJOY" to start your adventure.</p>
      </div>
    );
  }
}

class LandingPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: '', redirect: false, displayMessage: false};
    this.handleCodeSubmission = this.handleCodeSubmission.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  async handleCodeSubmission(e) {
    /**
     * Upendo Meeting Presentation code
     * Below code would fetch normally
     * 
     
    e.preventDefault();
    if (this.state.code === 'PUREJOY') {
      this.setState({redirect: true});
    } else {
      this.setState({code: '', displayMessage: true});
    }
    */

    e.preventDefault();
    try {
      const batchMemberData = await retrieveBatchMember(this.state.code);
      console.log(batchMemberData);
      // Check if batch member exists (need to refine checking for errors)
      if (batchMemberData) {
        const loadData = await this.props.getData(this.state.code, batchMemberData);
        if (loadData) {
          this.setState({redirect: true});
        }
      }
      this.setState({code: '', displayMessage: true});
    } catch (error) {
      this.setState({code:'', displayMessage: true});
      console.log(error);
    }
  }


  handleInput (e) {
    const input = e.target.value;
    this.setState({code: input.toUpperCase()});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/beekeeper'/> // Pass in information about order of slides
    } else {
      return (
        <div>
          <form onSubmit={this.handleCodeSubmission}>
            <label for="codeSearch"> Enter Your Jar's Code: </label>
            <input type="text" value={this.state.code} onChange={this.handleInput}
              placeholder={this.state.displayMessage ? "Invalid Code":"Type Your Code Here!"}
              name="codeSearch" id="inputForm"/>
            <input type="submit" value="Go" id="submitButton"/>
          </form>
        </div>
      );
    }
  }
}

export default LandingPage;
import React from 'react';
import "./landing-page.css";
import { retrieveBatchMember } from './modules/api-calls';
import { Redirect } from 'react-router-dom';
import Forest from './images/our-forest.JPG';
import FlowFooter from './modules/footer';
import MediaQuery from 'react-responsive';

/**
 * Landing Page that exists at the root of the website. Serves
 * as the main entry point of users to enter codes. Codes are found from
 * Upendo Honey Products. "PUREJOY" is the default code
 */
class LandingPage extends React.Component {

  render() {
    return (
      <div id="landingPage">
        <div id="imgContainer">
          <div id="left"></div>
          <img id="background" src={Forest} alt="Forest background "/>
          <div id="right"></div>
        </div>
        <LandingPageFormBox getData={this.props.getData} 
        setAlphaCode={this.props.setAlphaCode}
        getAlphaCode={this.props.getAlphaCode}/>
        <MediaQuery minDeviceWidth="800px">
          <FlowFooter content="This is the Content" footerClass="landingFooter"/>
        </MediaQuery>
      </div>
    );
  }
}

/**
 * Box that contains the input form for the alphanumeric code. Also contains
 * message that "PUREJOY" is available to those without a code
 */
class LandingPageFormBox extends React.Component {

  render() {
    return (
      <div id="landingPageBox">
        <h2 id="codeBoxHeader">Trace Your Honey ... </h2>
        <p id="codeBoxHeaderSub"> ... right back to the forest</p>
        <LandingPageForm getData={this.props.getData}
          getAlphaCode={this.props.getAlphaCode}
          setAlphaCode={this.props.setAlphaCode}
        />
        <hr></hr>
        <p id="autoCode">No Code? No worries! Enter "PUREJOY" to start your adventure.</p>
      </div>
    );
  }
}


/**
 * Input form that receives the alphanumeric code from users. An invalid code
 * will reject the user.
 */
class LandingPageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: '', redirect: false, displayMessage: false};
    this.handleCodeSubmission = this.handleCodeSubmission.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  async handleCodeSubmission(e) { /** Triggers access to backend using entered code */

    e.preventDefault();
    try {
      const batchMemberData = await retrieveBatchMember(this.state.code);
      console.log(batchMemberData);
      // Check if batch member exists (need to refine checking for errors)
      if (batchMemberData) {
        const loadData = await this.props.getData(this.state.code, batchMemberData);
        if (loadData) {
          /** If Code was succesful Load information into state and redirect*/
          await this.setState({redirect: true});
          await this.props.setAlphaCode(this.state.code);
        }
      }
      /** On Failure, print invalid code in text box */
      await this.setState({code: '', displayMessage: true});
    } catch (error) {
      await this.setState({code:'', displayMessage: true});
      console.log(error);
    }
  }


  handleInput (e) {
    const input = e.target.value;
    this.setState({code: input.toUpperCase()});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/> // Pass in information about order of slides
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
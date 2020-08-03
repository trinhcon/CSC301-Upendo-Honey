import React from 'react';
import "./landing-page.css";

// Import functions to retrieve data from backend
import { retrieveBatchMember } from './modules/api-calls';

// Import images
import Forest from './images/our-forest.JPG';

// Imported code modules
import FlowFooter from './modules/footer';

// React librairies
import MediaQuery from 'react-responsive';
import { Redirect } from 'react-router-dom';

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
        <LandingPageFormBox
          getData={this.props.getData} 
          setAlphaCode={this.props.setAlphaCode}
          getAlphaCode={this.props.getAlphaCode}

          /** Content */
          codeBoxHeader={this.props.codeBoxHeader}
          codeBoxSubHeader={this.props.codeBoxSubHeader}
          codeBoxNoCodeText={this.props.codeBoxNoCodeText}
          
          codeInputPlaceholder={this.props.codeInputPlaceholder}
          codeInputInvalid={this.props.codeInputInvalid}
        />
        <MediaQuery minDeviceWidth="800px">
          <FlowFooter footerClass="blackFooter"/>
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
        <h2 id="codeBoxHeader"> {this.props.codeBoxHeader} </h2>
        <p id="codeBoxHeaderSub"> {this.props.codeBoxSubHeader} </p>
        <LandingPageForm getData={this.props.getData}
          getAlphaCode={this.props.getAlphaCode}
          setAlphaCode={this.props.setAlphaCode}
          codeInputPlaceholder={this.props.codeInputPlaceholder}
          codeInputInvalid={this.props.codeInputInvalid}
        />
        <hr></hr>
        <p id="autoCode"> {this.props.codeBoxNoCodeText} </p>
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
    // Prevents a browser reload or refresh
    e.preventDefault();
    try {
      const batchMemberData = await retrieveBatchMember(this.state.code);
      console.log(batchMemberData);
      // Check if batch member exists (need to refine checking for errors)
      if (batchMemberData) {
        const loadData = await this.props.getData(this.state.code, batchMemberData);
        if (loadData) {
          /** If Code was successful Load information into state and redirect*/
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

  /** Method that updates state based on input value*/
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
              placeholder={this.state.displayMessage ? this.props.codeInputInvalid : this.props.codeInputPlaceholder}
              name="codeSearch" id="inputForm"/>
            <input type="submit" value="Go" id="submitButton"/>
          </form>
        </div>
      );
    }
  }
}

export default LandingPage;
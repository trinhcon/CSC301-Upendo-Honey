import React from 'react';
import "./beekeeper-message.css";

// Javascript library for sending emails
import emailjs from 'emailjs-com';

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import NextArrow from '../../modules/next-arrow';

// React librairies
import { Swipeable } from 'react-swipeable';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';
import ReactGA from 'react-ga';

/** Email message page where customers can interact
 * with their beekeepers by sending an email directly to
 * the partner, who will pass the message to the beekeeper
 */
class BeekeeperMessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectLetter: false, redirectMenu: false};
    }

    swipeLeftHandler(eventData) {  /** Redirect to the Next Page */
        this.setState({redirectLetter: false, redirectMenu: true})
    }

    swipeRightHandler(eventData) { /** Redirect to the Menu */
        this.setState({redirectLetter: true, redirectMenu: false})
    }

    async componentDidMount() { /** If arrived through URL, fetch resources */
        const { alphaCode } = this.props.match.params;
        if ((typeof alphaCode !== undefined) && !this.props.getDataStatus()){
            await this.props.setAlphaCode(alphaCode);
            await this.props.retrieveAppData();
        } else {
            console.log('DEVLOG: URL Param Matching failed');
        }
    }

    render () {
        if (this.state.redirectLetter) {
            return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/beekeeper-letter'}/>);
        } else if (this.state.redirectMenu){
            return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/menu'}/>);
        } else {
            return (
                <Swipeable onSwipedLeft={this.swipeLeftHandler} className="messagePage"
                    onSwipedRight={this.swipeRightHandler}
                >
                
                    <FlowHeader content={this.props.headerName}
                    headerClass = 'greenStrip'
                    textStyle='greenStripTextSmall'/>
                    <MediaQuery minDeviceWidth="600px">
                        <FlowProgressBar position="three" flow="beekeeperProgress"/>
                        <NextArrow nextPage={"/app/"+ this.props.getAlphaCode()+"/menu"} direction="right"/>
                        <NextArrow nextPage={"/app/" + this.props.getAlphaCode() + "/beekeeper-letter"} direction="left"/>

                    </MediaQuery>
                    <MessageForm
                        successMessage={this.props.successMessage}
                        failureMessage={this.props.failureMessage}
                        emailInit={this.props.emailInit}
                        emailPlaceholder={this.props.emailPlaceholder}
                        textInit={this.props.textInit}
                        textPlaceholder={this.props.textPlaceholder}
                        beekeeperName={this.props.beekeeperName}
                        nameInit={this.props.nameInit}
                        namePlaceholder={this.props.namePlaceholder}
                        serviceID={this.props.serviceID}
                        templateID={this.props.templateID}
                        userID={this.props.userID}

                    />
                    <FlowFooter content="This is the Footer" footerClass='patternedFooter'/>
                </Swipeable>
            );
        }
    }
}

/**
 * The Form which contains the message email that allows for the user to 
 * send their personaliized message back to Upendo Honey
 */
class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        /** State necessary to send the email, all properties of EmailJS */
        this.state = {email: this.props.emailInit, message: this.props.textInit, name: this.props.nameInit,
             serviceID: this.props.serviceID, templateID: this.props.templateID, userID: this.props.userID};
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }

    handleFormSubmission (e) { /** Email JS form interaction handler on submission */
        e.preventDefault();
        emailjs.sendForm(this.state.serviceID, this.state.templateID, e.target, this.state.userID)
        .then((result) => {
            console.log(result.text);
            if (result.text === 'OK') {
                this.setState({message: this.props.successMessage});
            }
        }, (error) => {
            console.log(error.text);
            this.setState({message: this.props.failureMessage})
        });

        // Track the button click in google analytics
        ReactGA.event({
            category: "Interaction",
            action: "Sent Email to Beekeeper",
        });
    }

    // Following three methods store the input to form boxes in state
    handleNameInput (e) {
        this.setState({name: e.target.value});
    }

    handleEmailInput (e) {
        this.setState({email: e.target.value});
    }

    handleMessageInput(e) {
        this.setState({message: e.target.value});
    }

    render () { /** Email JS Form */
        return (
            <div id="formBox">
                <form onSubmit={this.handleFormSubmission} className="contactForm">
                    <label id="messageBox">
                        <span className="inputLabel" id="messageLabel">Let them know what you think of the honey!</span>
                        <textarea value={this.state.message}
                        name="message" id="messageForm" placeholder={this.props.textPlaceholder}
                        onChange={this.handleMessageInput}/>
                        </label>
                    <label id="detailsBox">
                        <span className="inputLabel">Let us know how to get back to you!</span>
                        <div id="inputDetailsBox">
                            <div id="emailBox">
                                <label for="email">Email:</label>
                                <br/>
                                <input type="text" value={this.state.email}
                                name="email" id="emailForm" placeholder={this.props.emailPlaceholder}
                                onChange={this.handleEmailInput}/>
                                <br/>
                            </div>
                            <div id="nameBox">
                                <label for="name">Name:</label>
                                <br/>
                                <input type="text" value={this.state.name}
                                name="name" id="nameForm" placeholder={this.props.namePlaceholder}
                                onChange={this.handleNameInput}/>
                                <br/>
                            </div>
                            <input type="hidden" value={this.props.beekeeperName}
                                name="beekeeper" id="beekeeperForm"
                            />
                        </div>
                        <input type="submit" value="Send!" id="sendButton" />
                    </label> 
                </form>
            </div>
        )
    }
}

export default BeekeeperMessagePage;

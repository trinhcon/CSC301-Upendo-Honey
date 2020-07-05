import React from 'react';
import emailjs from 'emailjs-com';

import "./beekeeper-message.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';

import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Bee from "../../images/bee.svg";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';

class BeekeeperMessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectLetter: false, redirectMenu: false};
    }

    swipeLeftHandler(eventData) {
        this.setState({redirectLetter: false, redirectMenu: true})
    }

    swipeRightHandler(eventData) {
        this.setState({redirectLetter: true, redirectMenu: false})
    }

    async componentDidMount() {
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
                
                    <FlowHeader content="Send a Message to Your Beekeeper!"
                    headerClass = 'blueStrip'
                    textStyle='blueStripTextSmall'/>
                    <MediaQuery minDeviceWidth="600px">
                        <FlowProgressBar position="three" flow="beekeeperProgress"/>
                        <NextArrow nextPage={"/app/"+ this.props.getAlphaCode()+"/menu"} direction="right"/>
                        <NextArrow nextPage={"/app/" + this.props.getAlphaCode() + "/beekeeper-letter"} direction="left"/>

                    </MediaQuery>
                    <MessageForm />
                    <FlowFooter content="This is the Footer" footerClass='blackFooter'/>
                </Swipeable>
            );
        }
    }
}

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', message: '', name: '', serviceID: 'sendgrid', templateID: 'test', userID: 'user_cTGmCITtt4QvUtVoNpigA'};
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }

    handleFormSubmission (e) {
        e.preventDefault();
        emailjs.sendForm(this.state.serviceID, this.state.templateID, e.target, this.state.userID)
        .then((result) => {
            console.log(result.text);
            if (result.text === 'OK') {
                this.setState({message: "Success! Those buzzing bees will deliver your message!"});
            }
        }, (error) => {
            console.log(error.text);
            this.setState({name: error.text})
        });
    }

    handleNameInput (e) {
        this.setState({name: e.target.value});
    }

    handleEmailInput (e) {
        this.setState({email: e.target.value});
    }

    handleMessageInput(e) {
        this.setState({message: e.target.value});
    }

    render () {
        return (
            <div id="formBox">
                <form onSubmit={this.handleFormSubmission} className="contactForm">
                    <label id="messageBox">
                        <span className="inputLabel" id="messageLabel">Let them know what you think of the honey!</span>
                        <textarea value={this.state.message}
                        name="message" id="messageForm" placeholder="Dear Beekeeper..."
                        onChange={this.handleMessageInput}/>
                        </label>
                    <label id="detailsBox"> 
                        <span className="inputLabel">Let us know how to get back to you!</span>
                        <div id="inputDetailsBox">
                        <div id="emailBox">
                            <label for="email">Email:</label>
                            <br/>
                            <input type="text" value={this.state.email}
                            name="email" id="emailForm" placeholder="Your Name"
                            onChange={this.handleEmailInput}/>
                            <br/>
                        </div>
                        <div id="nameBox">
                            <label for="name">Name:</label>
                            <br/>
                            <input type="text" value={this.state.name}
                            name="name" id="nameForm" placeholder="Your Email"
                            onChange={this.handleNameInput}/>
                            <br/>
                        </div>
                        </div>
                    </label> 
                    <input type="submit" value="Send!" id="sendButton" />
                </form>
            </div>
        )
    }
}

export default BeekeeperMessagePage;

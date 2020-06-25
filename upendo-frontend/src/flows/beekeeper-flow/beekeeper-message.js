import React from 'react';

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
                
                    <FlowHeader content="Send Back a Message!"
                    headerClass = 'blueStrip'
                    textStyle='blueStripText'/>
                    <MediaQuery minDeviceWidth="600px">
                        <FlowProgressBar position="three"/>
                        <NextArrow nextPage="/menu"/>

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
        this.state = {email: '', message: '', name: ''};
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
    }

    handleFormSubmission (e) {

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
                    <div id="details">
                        <div>
                            <label for="email">Provide Email Here:</label>
                            <br/>
                            <input type="text" value={this.state.email}
                            name="email" id="emailForm"
                            onChange={this.handleEmailInput}/>
                            <br/>
                        </div>
                    
                        <div>
                            <label for="name">Provide Your Name Here:</label>
                            <br/>
                            <input type="text" value={this.state.name}
                            name="name" id="nameForm"
                            onChange={this.handleNameInput}/>
                            <br/>
                        </div>
                    </div>
                    <label for="message">Write your Message Here!</label>
                    <br/>
                    <textarea value={this.state.message}
                      name="message" id="messageForm" placeholder="Dear Beekeeper..."
                      onChange={this.handleMessageInput}/>
                      <br/>
                    <input type="submit" value="Send" id="submitButton" />
                </form>
            </div>
        )
    }
}

export default BeekeeperMessagePage;

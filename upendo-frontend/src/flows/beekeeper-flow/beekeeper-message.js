import React from 'react';

import "./beekeeper-message.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';

import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

class BeekeeperMessagePage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectLetter: false, redirectMenu: false};
    }

    swipeLeftHandler(eventData) {
        this.setState({redirectLetter: false, redirectMenu: false})
    }

    swipeRightHandler(eventData) {
        this.setState({redirectLetter: true, redirectMenu: false})
    }
 
    render () {
        if (this.state.redirectLetter) {
            return (<Redirect to='/beekeeper-letter'/>);
        } else if (this.state.redirectMenu){
            return (<Redirect to='/menu'/>);
        } else {
            return (
<<<<<<< HEAD
<<<<<<< HEAD
                <div id="messagePage">
                    <Swipeable onSwipedLeft={this.swipeLeftHandler}
                        onSwipedRight={this.swipeRightHandler}
                    >
                    
                        <FlowHeader content="Send Back a Message!"
                        headerClass = 'blueStrip'
                        textStyle='blueStripText'/>
                        <MessageForm />
                        <FlowFooter content="Footer" footerClass='blackStrip'/>
                    </Swipeable>
                </div>
=======
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
                <Swipeable onSwipedLeft={this.swipeLeftHandler} className="messagePage"
                    onSwipedRight={this.swipeRightHandler}
                >
                
                    <FlowHeader content="Send Back a Message!"
                    headerClass = 'blueStrip'
                    textStyle='blueStripText'/>
                    <MessageForm />
                    <FlowFooter content="This is the Footer" footerClass='blackFooter'/>
                </Swipeable>
<<<<<<< HEAD
>>>>>>> Touched up mobile designs (flexbox, spacing)
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
            );
        }
    }
}

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', message: ''};
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
    }

    handleFormSubmission (e) {

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
                <form action="mailto:yornoc789@gmail.com" method="post" enctype="text/plain">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
                    <label for="email">Provide Email Here:</label>
                    <br/>
                    <input type="text" value={this.state.email}
                      name="email" id="emailForm"
                      onChange={this.handleEmailInput}/>
                      <br/>
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
/**
 *     render () {
        return (
            <div id="formBox">
                <form onSubmit={this.handleFormSubmission}>
<<<<<<< HEAD
>>>>>>> Touched up mobile designs (flexbox, spacing)
                    <label for="email">Provide Email Here:</label>
                    <br/>
                    <input type="text" value={this.state.email}
                      name="email" id="emailForm"
                      onChange={this.handleEmailInput}/>
                      <br/>
                    <label for="message">Write your Message Here!</label>
                    <br/>
                    <input type="text" value={this.state.message}
                      name="message" id="messageForm"
                      onChange={this.handleMessageInput}/>
                      <br/>
                    <input type="submit" value="Send" id="submitButton" />
                </form>
            </div>
        )
    }
}
/**
 *     render () {
        return (
            <div id="formBox">
                <form onSubmit={this.handleFormSubmission}>
=======
>>>>>>> a7e0709cd5645f3fc7cdd617a5d730ea3bc23ef1
                    <label for="email">Provide Email Here:</label>
                    <input type="text" value={this.state.email}
                      name="email" id="emailForm"
                      onChange={this.handleEmailInput}/>
                    <label for="message">Write your Message Here!</label>
                    <input type="text" value={this.state.message}
                      name="message" id="messageForm"
                      onChange={this.handleMessageInput}/>
                    <input type="submit" value="Send" id="submitButton" />
                </form>
            </div>
        )
    }
 */
export default BeekeeperMessagePage;

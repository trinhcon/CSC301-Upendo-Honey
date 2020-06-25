import React from 'react';

import "./beekeeper-letter.css";
import FlowFooter from '../../modules/footer';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams} from "react-router-dom";


class BeekeeperLetterPage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectPortrait: false,
            redirectMessage: false};
    }

    swipeLeftHandler(eventData){
        this.setState({redirectMessage: true, redirectPortrait: false});
    }

    swipeRightHandler(eventData){
        this.setState({redirectMessage: false, redirectPortrait: true});
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

        if (this.state.redirectPortrait) {
            return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/beekeeper'}/>);
        } else if (this.state.redirectMessage) {
            return (<Redirect to={'/app/' + this.props.getAlphaCode() + '/beekeeper-message'}/>);
        } else {
            return (
            <Swipeable onSwipedLeft={this.swipeLeftHandler}
            onSwipedRight={this.swipeRightHandler}
            className="letterPage"
            > 
                <div id="beekeeperLetterTitle">
                    <h1 >A Letter from your Beekeeper...</h1>
                </div>
                <LetterPhoto letter={this.props.bk.letter}/>
                <Translation translation={this.props.bk.translation}/>
                <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
            </Swipeable>
            );
        }
            
    };
}

class LetterPhoto extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <figure id="letterContainer">
                <figcaption>...from your beekeeper</figcaption>
                <img src={this.props.letter}></img>
            </figure>
        )
    }
}

class Translation extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="frame">
                <div id="letterTranslation">
                    <p >{this.props.translation}</p>
                </div>
            </div>
        )
    }
}

export default BeekeeperLetterPage;

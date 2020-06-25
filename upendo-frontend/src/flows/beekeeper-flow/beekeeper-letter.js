import React from 'react';

import "./beekeeper-letter.css";
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MediaQuery from 'react-responsive';
import NextArrow from '../../modules/next-arrow';
import Bee from "../../images/bee.svg";



class BeekeeperLetterPage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectPortrait: false, redirectMessage: false};
    }

    swipeLeftHandler(eventData){
        this.setState({redirectMessage: true, redirectPortrait: false});
    }

    swipeRightHandler(eventData){
        this.setState({redirectMessage: false, redirectPortrait: true});
    }

    render () {
        if (this.state.redirectPortrait) {
            return (<Redirect to='/beekeeper'/>);
        } else if (this.state.redirectMessage) {
            return (<Redirect to='/beekeeper-message'/>);
        } else {
            return (
            <Swipeable onSwipedLeft={this.swipeLeftHandler}
            onSwipedRight={this.swipeRightHandler}
            className="letterPage"
            > 
                <MediaQuery minDeviceWidth="600px">
                    <FlowProgressBar position="two"/>
                    <FlowHeader content="A Letter from your Beekeeper..." headerClass="blueStrip"
            textStyle="blueStripText"/>
                    <NextArrow nextPage="/beekeeper-message"/>
                    <div className="honeyDipper">
                        <img src={Bee} alt="Bee"/>
                    </div>

                    <caption className="caption">
                        caption
                    </caption>

                </MediaQuery>
                <MediaQuery maxDeviceWidth="600px">
                    <div id="beekeeperLetterTitle">
                        <div className="bee">
                        </div>
                        <h2 >A Letter from your Beekeeper...</h2>
                        <div className="bee">
                        </div>
                    </div>

                </MediaQuery>
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

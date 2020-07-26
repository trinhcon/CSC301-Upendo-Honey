import React from 'react';
import "./beekeeper-letter.css";

// Modules
import FlowHeader from '../../modules/header';
import FlowFooter from '../../modules/footer';
import FlowProgressBar from '../../modules/progress-bar';
import NextArrow from '../../modules/next-arrow';

// React librairies
import { Swipeable } from 'react-swipeable';
import { Redirect } from "react-router-dom";
import MediaQuery from 'react-responsive';


/**
 * Beekeeper Letter passed Letter Picture, and Translation Description
 */
class BeekeeperLetterPage extends React.Component {
    constructor(props) {
        super(props);
        this.swipeLeftHandler = this.swipeLeftHandler.bind(this);
        this.swipeRightHandler = this.swipeRightHandler.bind(this);
        this.state = {redirectPortrait: false,
            redirectMessage: false};
    }

    swipeLeftHandler(eventData){ /** Redirect to the Next Page */
        this.setState({redirectMessage: true, redirectPortrait: false});
    }

    swipeRightHandler(eventData){ /** Redirect to the Menu */
        this.setState({redirectMessage: false, redirectPortrait: true});
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
                <FlowHeader content="A Little Letter to You..." headerClass="greenStrip"
            textStyle="greenStripText"/>
                <MediaQuery minDeviceWidth="600px">
                    <FlowProgressBar position="two" flow="beekeeperProgress"/>
                    <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/beekeeper-message'} direction="right"/>
                    <NextArrow nextPage={'/app/' + this.props.getAlphaCode() + '/beekeeper'} direction="left"/>
                </MediaQuery>
                <LetterPhoto letter={this.props.bk.letter}/>
                <Translation translation={this.props.bk.translation}/>
                <FlowFooter content="This is the Footer" footerClass="patternedFooter"/>
            </Swipeable>
            );
        }
            
    };
}

/**
 * Photo written by the beekeeper placed in a div container and 
 * surrounded by borders
 */
class LetterPhoto extends React.Component {

    render () {
        return (
            <figure id="letterContainer">
                <figcaption>...from your beekeeper</figcaption>
                <div id="letterFrame">
                    <img src={this.props.letter} alt="Beekeeper Letter"></img>
                </div>
            </figure>
        )
    }
}

/**
 * Translated description of the beekeeper letter encapsulated in
 * it's on section
 */
class Translation extends React.Component {

    render () {
        return (
            <div id="letterTranslation">
                <p >{this.props.translation}</p>
            </div>
        )
    }
}

export default BeekeeperLetterPage;

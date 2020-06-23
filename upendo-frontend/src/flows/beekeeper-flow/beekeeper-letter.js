import React from 'react';

import "./beekeeper-letter.css";
import FlowFooter from '../../modules/footer';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";


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
<<<<<<< HEAD
            <div>
                <Swipeable onSwipedLeft={this.swipeLeftHandler}
                onSwipedRight={this.swipeRightHandler}
                > 
=======
            <Swipeable onSwipedLeft={this.swipeLeftHandler}
            onSwipedRight={this.swipeRightHandler}
            className="letterPage"
            > 
>>>>>>> Touched up mobile designs (flexbox, spacing)
                <div id="beekeeperLetterTitle">
                    <h1 >A Letter from your Beekeeper...</h1>
                </div>
                <LetterPhoto letter={this.props.bk.letter}/>
                <Translation translation={this.props.bk.translation}/>
                <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
<<<<<<< HEAD
                </Swipeable>
            </div>
=======
            </Swipeable>
>>>>>>> Touched up mobile designs (flexbox, spacing)
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
<<<<<<< HEAD
            <div id="letterContainer">
                <figcaption>To you</figcaption>
=======
            <figure id="letterContainer">
                <figcaption>...from your beekeeper</figcaption>
>>>>>>> Touched up mobile designs (flexbox, spacing)
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

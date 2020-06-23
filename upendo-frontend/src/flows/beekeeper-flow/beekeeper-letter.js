import React from 'react';

import "./beekeeper-letter.css";
import FlowFooter from '../../modules/footer';

class BeekeeperLetterPage extends React.Component {
    constructor(props) {
        super(props);
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
                <p id="letterTranslation">{this.props.translation}</p>
            </div>
        )
    }
}

export default BeekeeperLetterPage;

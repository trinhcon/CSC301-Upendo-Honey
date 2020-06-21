import React from 'react';

import "./beekeeper-letter.css";
import FlowFooter from '../../modules/footer';

class BeekeeperLetterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>A Little Letter to You...</h1>
                <LetterPhoto letter={this.props.bk.letter}/>
                <Translation translation={this.props.bk.translation}/>
                <FlowFooter content="This is the Footer" footerClass="blackFooter"/>
            </div>
        )};
}

class LetterPhoto extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="letterContainer">
                <figcaption>...from Your Beekeeper</figcaption>
                <img src={this.props.letter}></img>
            </div>
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

import React from 'react';
import './next-arrow.css';

import Left from '../images/left.png';
import Right from '../images/right.png';
import { Link } from 'react-router-dom';

class NextArrow extends React.Component {
    render () {
        return (
            <div class={"arrowContainer " + this.props.direction}>
                <Link to={this.props.nextPage}>
                  <img class={"arrowImg"}
                   src={this.props.direction === "left" ? Left : Right} alt="Next button"/>
                </Link>
            </div>
        )
    }
}

export default NextArrow;
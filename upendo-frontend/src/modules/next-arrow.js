import React from 'react';
import './next-arrow.css';

import Arrow from '../images/next-arrow.png';
import { Link } from 'react-router-dom';

class NextArrow extends React.Component {
    render () {
        return (
            <div class="arrowContainer">
                <Link to={this.props.nextPage}>
                  <img class="arrowImg" src={Arrow} alt="Next button"/>
                </Link>
            </div>
        )
    }
}

export default NextArrow;
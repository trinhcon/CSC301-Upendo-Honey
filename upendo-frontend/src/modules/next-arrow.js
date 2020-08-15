import React from 'react';
import './next-arrow.css';

// Imported images
import Left from '../images/left.png';
import Right from '../images/right.png';

// For linking to another page
import { Link } from 'react-router-dom';

class NextArrow extends React.Component {
    /* props.direction determines the image that is used */
    /* props.nextPage determines where the page links to */
    render () {
        return (
            <div className={"arrowContainer " + this.props.direction}>
                <Link to={this.props.nextPage}>
                  <img className={"arrowImg"}
                   src={this.props.direction === "left" ? Left : Right} 
                   alt={this.props.direction === "left" ? "Go back button" : "Next button"}/>
                </Link>
            </div>
        )
    }
}

export default NextArrow;
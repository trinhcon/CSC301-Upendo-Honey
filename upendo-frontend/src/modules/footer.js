import React from 'react';
import "./footer.css";

class FlowFooter extends React.Component {
    /* props.content content of the footer, can be empty string */
    /* props.footerClass is the class to style the footer */
    /*  */

  render() {
    /** Render Footer with specified style */
    return(
      <footer className={this.props.footerClass}></footer>
    )
  }
}

export default FlowFooter;
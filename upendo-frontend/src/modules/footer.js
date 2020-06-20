import React from 'react';
import "./footer.css";

class FlowFooter extends React.Component {
  constructor(props) {
    super(props);
    /* props.content content of the footer, can be empty string */
    /* props.footerClass is the class to style the footer */
    /*  */
  }

  render() {
    return (
      <footer className={this.props.footerClass}>
        <div></div>
        {/*<p className={this.props.footerClass}>{this.props.content}</p>*/}
      </footer> /* We can add a social media API here */
      
    );
  }
}

export default FlowFooter;
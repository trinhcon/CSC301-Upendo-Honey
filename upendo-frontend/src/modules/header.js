import React from 'react';
import "./header.css";

class FlowHeader extends React.Component {
  constructor(props) {
    super(props);
    /* props.headerClass is the class to style the header */
    /* props.content is the content of the header */
  }

  render() {
    return (
      <div className={this.props.headerClass}>
        <p className={this.props.textStyle}>{this.props.content}</p>
      </div>
    );
  }
}

export default FlowHeader;
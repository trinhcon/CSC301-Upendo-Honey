import React from 'react';
import "./footer.css";

class FlowFooter extends React.Component {
    /* props.content content of the footer, can be empty string */
    /* props.footerClass is the class to style the footer */
    /*  */

  render() {
    /** Render Footer with specified style */
    if (this.props.isMenu) {
      return (
        <footer className={this.props.footerClass + " menuFooter"}>
        </footer>
      )
    } else if (this.props.footerClass === "landingFooter"){
      return (
        <footer className="blackFooter">
        </footer>
      )
    } else {
      return (
        <footer className={this.props.footerClass}>   
        </footer>
        
      );
    }
  }
}
/* Previous Navigation Component
class NavigationIcons extends React.Component {
  render() {
    return (
      <div className="navigationIcons">
        <NavigationIcon icon="tanzania" iconClass="footer"/>
        <NavigationIcon icon="environment" iconClass="footer"/>
        <NavigationIcon icon="honey" iconClass="footer"/>
      </div>
    )
  }
}
*/

/* Previous Pure Joy component
class PureJoy extends React.Component {
  render () {
    return (
      <div className="pureJoy">
        <img src='https://static.wixstatic.com/media/5bc36c_ed0309d34e004b2eafe5da6d018bc4c7~mv2.png/v1/fill/w_77,h_88,al_c,q_85,usm_0.66_1.00_0.01/Transparent%20Logo.webp'
        alt='Pure Joy Icon' id="pureJoyImage"/>
      </div>

    )
  }
}
*/

export default FlowFooter;
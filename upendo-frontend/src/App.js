import React from 'react';
import LandingPage from "./landing-page";
import BeekeeperContainer from "./flows/beekeeper-flow/beekeeper-portrait";


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path = "/beekeeper" render={() =>   (
            <BeekeeperContainer imageURL="https://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg"
              beekeeperDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut erat tincidunt, lobortis nisi sit amet, ullamcorper neque. Vivamus iaculis ac enim et laoreet. Phasellus aliquam porta vehicula. Maecenas porta. "
              beekeeperName="Picu, Rat's new best friend"
            />
            )}

          />
          <Route path = "/" component = {LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
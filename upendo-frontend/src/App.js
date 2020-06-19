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
          <Route path = "/beekeeper" component = {BeekeeperContainer} />
          <Route path = "/" component = {LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
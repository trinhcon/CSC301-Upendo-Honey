import React from 'react';
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path = "/menu" render = {() => (
            <MenuPage beekeeperFirstPage="/beekeeper"
              environmentFirstPage="/blah1"
              honeyFirstPage="/blah2"
              tanzaniaFirstPage="/blah3"
            /> 
            )}
          />
          <Route path = "/beekeeper-letter" render = {() => (
              <BeekeeperLetterPage bk = {{letter: "https://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg", translation: "blah"}}
              />
            )}
          />
          <Route path = "/beekeeper-message" component = {BeekeeperMessagePage}/>
          <Route path = "/beekeeper" render={() =>   (
            <BeekeeperPage imageURL="https://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg"
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
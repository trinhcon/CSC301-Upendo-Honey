import React from 'react';
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";
import Leonard from './images/Leonard-Mahenge.jpg';
import Letter from './images/BK 1 Letter.jpeg';
import Frame from './images/Frame.svg';

// "https://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg"

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
              <BeekeeperLetterPage bk = {{letter: Letter, translation: "Dear Customer, Thank you for choosing our honey. In doing so you are helping us financially and also by giving us your feedback helps us and motivates us to work harder and smarter in beekeeping. Thank you and please welcom again."}}
              />
            )}
          />
          <Route path = "/beekeeper-message" component = {BeekeeperMessagePage}/>
          <Route path = "/beekeeper" render={() =>   (
            <BeekeeperPage imageURL= {Leonard}
              beekeeperDescription="Meet Leonard Mahenge, father of four and beekeeper. Leonard harvests his honey from the Mpanda Line Forest Reserve. At the end of each flowering season, Leonard and his children collect the ready honeycombs from high in the forest canopy. "
              beekeeperName="Leonard Mahenge"
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
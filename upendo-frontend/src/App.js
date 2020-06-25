import React from 'react';
import "./App.css";
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";
import { retrieveBeekeeper } from "./modules/apiCalls";
import Leonard from './images/Leonard-Mahenge.jpg';
import Letter from './images/BK 1 Letter.jpeg';
<<<<<<< HEAD
=======
import BeeIcon from './images/bee.svg';
>>>>>>> frontend-setup

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {alphacode: '', batchMember: {}, beekeeper: {}};
    this.getData = this.getData.bind(this);
  }

  async getData(code, batchMemberData) {
    // Uses retrieve beekeeper method to make a call to api to get beekeeper
<<<<<<< HEAD
    const beekeeperData = await retrieveBeekeeper("/api/v1/beekeepers/" + batchMemberData.beekeeper);
=======
    const beekeeperData = await retrieveBeekeeper(batchMemberData.beekeeper);
>>>>>>> frontend-setup
    console.log(beekeeperData);
    if (beekeeperData) {
      this.setState({alphacode: code, batchMember: batchMemberData, beekeeper: beekeeperData});
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path = "/menu" render = {() => (
<<<<<<< HEAD
            <MenuPage beekeeperFirstPage="/beekeeper"
              environmentFirstPage="/blah1"
              honeyFirstPage="/blah2"
              tanzaniaFirstPage="/blah3"
            />
=======
            <MenuPage
              beekeeperFirstPage="/beekeeper"
              beekeeperIcon={BeeIcon}
              environmentFirstPage="/blah1"
              environmentIcon={BeeIcon}
              honeyFirstPage="/blah2"
              honeyIcon={BeeIcon}
              tanzaniaFirstPage="/blah3"
              tanzaniaIcon={BeeIcon}

            /> 
>>>>>>> frontend-setup
            )}
          />
          <Route path = "/beekeeper-letter" render = {() => (
              <BeekeeperLetterPage bk = {{letter: this.state.beekeeper.letter_img_url, translation: this.state.beekeeper.letter_text}}
              />
            )}
          />
          <Route path = "/beekeeper-message" component = {BeekeeperMessagePage}/>
          <Route path = "/beekeeper" render={() =>   (
            <BeekeeperPage imageURL= {this.state.beekeeper.photo}
              beekeeperDescription= {this.state.beekeeper.bio}
              beekeeperName={this.state.beekeeper.name}
            />
            )}
          />
          <Route path = "/" render = {() => (
            <LandingPage getData={this.getData}
            />
          )}
          />
        </Switch>
      </Router>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> frontend-setup

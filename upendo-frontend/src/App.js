import React from 'react';
import "./App.css";
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";
import { retrieveBeekeeper } from "./modules/api-calls";
import Leonard from './images/Leonard-Mahenge.jpg';
import Letter from './images/BK 1 Letter.jpeg';
import BeeIcon from './images/bee.svg';
import Logo from '../images/upendo-logo.jpg';

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
    const beekeeperData = await retrieveBeekeeper(batchMemberData.beekeeper);
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
            <MenuPage
              upendoIcon={Logo}
              upenoURL={"http://upendoagri.com/"} // HARDCODED
              beekeeperFirstPage="/beekeeper"
              beekeeperIcon={BeeIcon}
              environmentFirstPage="/blah1"
              environmentIcon={BeeIcon}
              honeyFirstPage="/blah2"
              honeyIcon={BeeIcon}
              tanzaniaFirstPage="/blah3"
              tanzaniaIcon={BeeIcon}

            /> 
            )}
          />
          <Route path = "/beekeeper-letter" render = {() => (
              <BeekeeperLetterPage bk = {{letter: this.state.beekeeper.letter_img_url, translation: this.state.beekeeper.letter_text}}
              />
            )}
          />
          <Route path = "/beekeeper-message" component = {BeekeeperMessagePage}/>
          <Route path = "/beekeeper" render={() =>   (
            <BeekeeperPage imageURL={this.state.beekeeper.image_url}
              beekeeperDescription={this.state.beekeeper.bio}
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

export default App;
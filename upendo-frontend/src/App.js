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
import BeeIcon from './images/bee.svg';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {alphacode: 'PUREJOY', batchMember: {}, beekeeper: {}};
    this.getData = this.getData.bind(this);
    this.getAlphaCode = this.getAlphaCode.bind(this);
    this.setAlphaCode = this.setAlphaCode.bind(this);
  }

  getAlphaCode(){
    return this.state.alphacode;
  }

  setAlphaCode(code){
    this.setState({alphacode: code});
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
          <Route path = "/:alphaCode/menu" render = {(props) => (
            <MenuPage
              {...props}
              beekeeperFirstPage="/beekeeper"
              beekeeperIcon={BeeIcon}
              environmentFirstPage="/blah1"
              environmentIcon={BeeIcon}
              honeyFirstPage="/blah2"
              honeyIcon={BeeIcon}
              tanzaniaFirstPage="/blah3"
              tanzaniaIcon={BeeIcon}
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}

            /> 
            )}
          />
          <Route path = "/:alphaCode/beekeeper-letter" render = {(props) => (
              <BeekeeperLetterPage
                {...props}
                bk = {{letter: this.state.beekeeper.letter_img_url, translation: this.state.beekeeper.letter_text}}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}

              />
            )}
          />
          <Route path = "/:alphaCode/beekeeper-message"
            render = {(props) =>
              <BeekeeperMessagePage
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                
              />
            }
          />
          <Route path = "/:alphaCode/beekeeper" render={(props) =>   (
            <BeekeeperPage
              {...props}
              imageURL= {this.state.beekeeper.photo}
              beekeeperDescription= {this.state.beekeeper.bio}
              beekeeperName={this.state.beekeeper.name}
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}
            />
            )}
          />
          <Route path = "/" render = {() => (
            <LandingPage getData={this.getData}
            getAlphaCode={this.getAlphaCode}
            setAlphaCode={this.setAlphaCode}
            />
          )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
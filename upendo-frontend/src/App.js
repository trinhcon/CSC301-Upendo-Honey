import React from 'react';
import "./App.css";
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";
import { retrieveBeekeeper, retrieveBatchMember } from "./modules/apiCalls";
import Leonard from './images/Leonard-Mahenge.jpg';
import Letter from './images/BK 1 Letter.jpeg';

import BeeIcon from './images/bee.svg';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {alphacode: 'PUREJOY', batchMember: {}, beekeeper: {}, dataStatus: false};
    this.getData = this.getData.bind(this);
    this.getAlphaCode = this.getAlphaCode.bind(this);
    this.setAlphaCode = this.setAlphaCode.bind(this);
    this.getDataStatus = this.getDataStatus.bind(this);
    this.retrieveAppData = this.retrieveAppData.bind(this);
  }

  getDataStatus(){
    return this.state.dataStatus;
  }

  getAlphaCode(){
    return this.state.alphacode;
  }

  async setAlphaCode(code){
    console.log("Setting Alpha code");
    console.log(code);
    await this.setState({alphacode: code});
    console.log(this.state);
    console.log("done");
  }

  async retrieveAppData(){
    console.log("retrieving app data");
    console.log(this.state);
    try {
      const batchMemberData = await retrieveBatchMember(this.state.alphacode);
      console.log(batchMemberData);
      console.log(this.state);

      if (batchMemberData) {
        const loadData = await this.getData(this.state.alphacode, batchMemberData);
        if (!loadData && (this.state.alphacode !== "PUREJOY")) {
         this.setAlphaCode("PUREJOY");
         await this.retrieveAppData();
        } else {
          console.log(this.state);
          console.log("PUREJOY batchMember exists, but not beekeeper data");
        }
        if (loadData) {
          this.setState({dataStatus: true});
        }
      } else if (this.state.alphacode !== "PUREJOY") {
        console.log("batchMemberData does not exist, attempting PUREJOY");
        this.setAlphaCode("PUREJOY");
        await this.retrieveAppData(); 
      } else {
        console.log("PUREJOY data does not exist");
      }
    } catch(error) {
      console.log(error);
      if (this.state.alphacode !== "PUREJOY") {
        console.log("ERROR THROWN during batchMemberData, attempting PUREJOY")
        this.setAlphaCode("PUREJOY");
        await this.retrieveAppData();
      }
    }

  }


  async getData(code, batchMemberData) {
    // Uses retrieve beekeeper method to make a call to api to get beekeeper
    const beekeeperData = await retrieveBeekeeper("/api/v1/beekeepers/" + batchMemberData.beekeeper);
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
          <Route path = "/app/:alphaCode/menu" render = {(props) => (

            <MenuPage
              {...props}
              beekeeperFirstPage={"/app/" + this.getAlphaCode() + "/beekeeper"}
              beekeeperIcon={BeeIcon}
              environmentFirstPage="/app/blah1"
              environmentIcon={BeeIcon}
              honeyFirstPage="/app/blah2"
              honeyIcon={BeeIcon}
              tanzaniaFirstPage="/app/blah3"
              tanzaniaIcon={BeeIcon}
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}
              retrieveAppData={this.retrieveAppData}
              getDataStatus={this.getDataStatus}

            /> 
            )}
          />
          <Route path = "/app/:alphaCode/beekeeper-letter" render = {(props) => (
              <BeekeeperLetterPage
                {...props}
                bk = {{letter: this.state.beekeeper.letter_img_url, translation: this.state.beekeeper.letter_text}}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}

              />
            )}
          />
          <Route path = "/app/:alphaCode/beekeeper-message"
            render = {(props) =>
              <BeekeeperMessagePage
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                
              />
            }
          />
          <Route path = "/app/:alphaCode/beekeeper" render={(props) =>   (
            <BeekeeperPage
              {...props}
              imageURL= {this.state.beekeeper.photo}
              beekeeperDescription= {this.state.beekeeper.bio}
              beekeeperName={this.state.beekeeper.name}
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}
              retrieveAppData={this.retrieveAppData}
              getDataStatus={this.getDataStatus}
            />
            )}
          />
          <Route path = "/" render = {() => (
            <LandingPage getData={this.getData}
            getAlphaCode={this.getAlphaCode}
            setAlphaCode={this.setAlphaCode}
            getDataStatus={this.getDataStatus}
            />
          )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
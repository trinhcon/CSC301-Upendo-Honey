import React from 'react';
import "./App.css";
import LandingPage from "./landing-page";
import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";
import MenuPage from "./flows/menu";
import { retrieveBeekeeper, retrieveBatchMember, retrieveBatch, retrieveForest, retrieveHoney} from "./modules/api-calls";
import { Beekeeper, Honey, Health, Harvest, Forest, CarbonInformation} from "./content";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./landing-page.css";
import TanzaniaMapPage from './flows/tanzania-flow/tanzania-map';
import TanzaniaForestPage from './flows/tanzania-flow/tanzania-forest';
import HoneyTypePage from './flows/honey-flow/honey-type';
import HoneyHarvestPage from './flows/honey-flow/honey-harvest';
import HoneyHealthPage from './flows/honey-flow/honey-health';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("A new change")
    this.state = {alphacode: 'PUREJOY', batchMember: {}, beekeeper: {}, honey: {}, forest: {}, dataStatus: false};
    this.testFrontEnd = true; /* True retrieves data locally instead of from backend*/
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
         await this.setAlphaCode("PUREJOY");
         await this.retrieveAppData();
        } else {
          console.log(this.state);
          console.log("PUREJOY batchMember exists, but not beekeeper data");
        }
        if (loadData) {
          await this.setState({dataStatus: true});
        }
      } else if (this.state.alphacode !== "PUREJOY") {
        console.log("batchMemberData does not exist, attempting PUREJOY");
        await this.setAlphaCode("PUREJOY");
        await this.retrieveAppData(); 
      } else {
        console.log("PUREJOY data does not exist");
      }
    } catch(error) {
      console.log(error);
      if (this.state.alphacode !== "PUREJOY") {
        console.log("ERROR THROWN during batchMemberData, attempting PUREJOY")
        await this.setAlphaCode("PUREJOY");
        await this.retrieveAppData();
      }
    }

  }


  async getData(code, batchMemberData) {
    // Retrieves all the required data from the backend
    const batchData = await retrieveBatch("/api/v1/batches/" + batchMemberData.batch + '/');
    console.log("BatchData:", batchData);
    const data = await Promise.all(
      [retrieveBeekeeper("/api/v1/beekeepers/" + batchMemberData.beekeeper),
      retrieveForest("/api/v1/forests/" + batchData.forest  + '/'),
      retrieveHoney("/api/v1/honey/" + batchData.honey  + '/')]
      )
    console.log("Data from getData at Promise.all: \n", data);
    if (data) {
      const beekeeperData = data[0];
      const forestData = data[1];
      const honeyData = data[2];
      console.log(beekeeperData);
      this.setState({alphacode: code, batchMember: batchMemberData, beekeeper: beekeeperData, honey: honeyData, forest: forestData});
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
              environmentFirstPage="/app/blah1"
              honeyFirstPage={"/app/" + this.getAlphaCode() + "/honey-type"}
              tanzaniaFirstPage="/app/blah3"
              retailerLink={this.state.batchMember.external_url}
              retailerLogo={this.state.batchMember.logo}
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}
              retrieveAppData={this.retrieveAppData}
              getDataStatus={this.getDataStatus}

            /> 
            )}
          />
        
          <Route path= "/app/:alphacode/tanzania-map"render = {(props) => (
              <TanzaniaMapPage /** At the moment this page is static (same for alphacodes) */
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
              />
            )}
          />

          <Route path= "/app/:alphacode/tanzania-forest" render = {(props) => (
              <TanzaniaForestPage
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}

                headerName = {this.testFrontEnd ? Forest.forestName : this.state.forest.title}
                forestPhoto = {this.testFrontEnd ? Forest.forestPhoto : this.state.forest.photo}
                area = {this.testFrontEnd ? Forest.totalArea : this.state.forest.area}
                animals = {this.testFrontEnd ? Forest.animals : this.state.forest.animals}
                bkCount = {this.testFrontEnd ? Forest.beekeeperCount : this.state.forest.beekeeper_count}
                plants = {this.testFrontEnd ? Forest.plants : this.state.forest.plants}
              />
            )}
          />

          <Route path= "/app/:alphacode/honey-type" render = {(props) => (
              <HoneyTypePage
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                varietyMessage = {this.testFrontEnd ? Honey.varietyMessage : this.state.honey.variety}
                jarPhoto = {this.testFrontEnd ? Honey.jarPhoto : this.state.honey.jar_photo}
                honeyDescription = {this.testFrontEnd ? Honey.honeyDescription : this.state.honey.honey_description}
              />
            )}
          />

          <Route path= "/app/:alphacode/honey-harvest" render = {(props) => (
              <HoneyHarvestPage /** At the moment this page is static (same for alphacodes) */
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                harvestDescription={[Harvest.part1, Harvest.part2, Harvest.part3]}
                harvestPhoto1={Harvest.harvest1}
                harvestPhoto2={Harvest.harvest2}
                medal1={Harvest.euLogo}
                medal2={Harvest.usLogo}
              />
            )}
          />

          <Route path= "/app/:alphacode/honey-health" render = {(props) => (
              <HoneyHealthPage /** At the moment this page is static (same for alphacodes) */
                {...props}
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                bulletPoints = {Health.bulletPoints}
                healthDescription = {[Health.part1, Health.part2]}
                honeyPhoto1 = {Health.honeyHive}
                honeyPhoto2 = {Health.honeyComb}
              />
            )}
          />

          

          <Route path = "/app/:alphaCode/beekeeper-letter" render = {(props) => (
              <BeekeeperLetterPage
                {...props}
                bk = {this.testFrontEnd ? {letter: Beekeeper.beekeeperLetter, translation: Beekeeper.translation} :
                {letter: this.state.beekeeper.letter_photo, translation: this.state.beekeeper.letter_text}}
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
              imageURL= {this.testFrontEnd ? Beekeeper.beekeeperPhoto : this.state.beekeeper.photo}
              beekeeperDescription= {this.testFrontEnd ? Beekeeper.beekeeperDescription : this.state.beekeeper.bio}
              beekeeperName={this.testFrontEnd ? Beekeeper.beekeeperName : this.state.beekeeper.name}
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
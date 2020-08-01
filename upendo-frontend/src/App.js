import React from 'react';
import "./App.css";

// Imported pages for react router
import MenuPage from "./flows/menu";
import LandingPage from "./landing-page";

import BeekeeperPage from "./flows/beekeeper-flow/beekeeper-portrait";
import BeekeeperMessagePage from "./flows/beekeeper-flow/beekeeper-message";
import BeekeeperLetterPage from "./flows/beekeeper-flow/beekeeper-letter";

import TanzaniaMapPage from './flows/tanzania-flow/tanzania-map';
import TanzaniaForestPage from './flows/tanzania-flow/tanzania-forest';

import HoneyTypePage from './flows/honey-flow/honey-type';
import HoneyHarvestPage from './flows/honey-flow/honey-harvest';
import HoneyHealthPage from './flows/honey-flow/honey-health';
import EnvironmentForestPage from './flows/environment-flow/environment-forest';
import EnvironmentCarbonGraphPage from './flows/environment-flow/environment-carbon-graph';
import EnvironmentNetCarbonPage from './flows/environment-flow/environment-net-carbon';

// Import functions to retrieve data from backend
import { retrieveBeekeeper, retrieveBatchMember, retrieveBatch, retrieveForest, retrieveHoney} from "./modules/api-calls";

// Import google analytics module
import GAListener from './modules/ga-tracker';

// Import hardcoded content
import { Beekeeper, Honey, Health, Harvest, Forest, EnvironmentForest, CarbonGraph, NetCarbonGraph} from "./content";

// React librairies
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("A new change");
    this.state = {alphacode: 'PUREJOY', batchMember: {}, beekeeper: {}, honey: {}, forest: {}, dataStatus: false};
    this.testFrontEnd = true; /* True retrieves data locally instead of from backend*/
    this.getData = this.getData.bind(this);
    this.getAlphaCode = this.getAlphaCode.bind(this);
    this.setAlphaCode = this.setAlphaCode.bind(this);
    this.getDataStatus = this.getDataStatus.bind(this);
    this.retrieveAppData = this.retrieveAppData.bind(this);
  }

  // Checks if app already has retrieved data from backend
  getDataStatus(){
    return this.state.dataStatus;
  }

  // Retrieve currently stored alphacode
  getAlphaCode(){
    return this.state.alphacode;
  }

  // Sets the alpha code, asynchronous
  async setAlphaCode(code){
    console.log("Setting Alpha code");
    console.log(code);
    await this.setState({alphacode: code});
    console.log(this.state);
    console.log("Done");
  }

  /**
   * This function fetches data from backend REST apis using the alphanumeric
   * code that is required for a user to progress through the promotional App
   * Information that is pulled using that code is then passed down to child
   * components, each of which represents a separate section or flow of the
   * App. Information is only fetched once per visit. (Re-entering the
   * URL constitutes another visit)
   */
  async retrieveAppData(){
    console.log("retrieving app data");
    console.log(this.state);
    try {
      // Retrieve batchmember using the current alphacode stored in state
      const batchMemberData = await retrieveBatchMember(this.state.alphacode);
      console.log(batchMemberData);
      console.log(this.state);

      // If it exists, load all the associated data associated with the batchmember
      if (batchMemberData) {
        const loadData = await this.getData(this.state.alphacode, batchMemberData);
        // Batchmember retrieval successful, but unable to load the rest of the data
        if (!loadData && (this.state.alphacode !== "PUREJOY")) {
         await this.setAlphaCode("PUREJOY");
         await this.retrieveAppData();
        } else {
          console.log(this.state);
          console.log("PUREJOY batchMember exists, but not beekeeper data");
        }
        // App has successfully stored data, datastatus is true
        if (loadData) {
          await this.setState({dataStatus: true});
        }
      } else if (this.state.alphacode !== "PUREJOY") {
        // If code was incorrect default to PUREJOY, should always exist
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

  /**
   * This function populates each state in the App.JS Component using the
   * information retrieved from the backend.
   * @param {*} code; Code that the user inputs into the URL or input bar
   * @param {*} batchMemberData; MemberData that is fetched from backend server  
   */
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
    // If data exists, store into the state of App
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
      /**
       * Each Route Below symbolizes another page in the overal promotional
       * application, each prop that is passed down is either
       * fetched or is static data. Each possesses ":alphacode" which is
       * the alphanumeric code entered by the user that is used to distinguish
       * the content that is presented to the users
       * 
       * Functions to modify App Component state are also passed down.
       * 
       */
      <Router>
        <GAListener trackingId="UA-174142083-1">
        <Switch>
          <Route path = "/app/:alphaCode/menu" render = {(props) => (
              <MenuPage
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /** Content Passed in */
                retailerLink={this.state.batchMember.external_url}
                retailerLogo={this.state.batchMember.logo}
                /** URLs to other pages */
                beekeeperFirstPage={"/app/" + this.getAlphaCode() + "/beekeeper"}
                environmentFirstPage={"/app/" + this.getAlphaCode() + "/environment-forest"}
                honeyFirstPage={"/app/" + this.getAlphaCode() + "/honey-type"}
                tanzaniaFirstPage={"/app/" + this.getAlphaCode() + "/tanzania-map"}
              />
            )}
          />

          <Route path= "/app/:alphacode/environment-forest" render = {(props) => (
              <EnvironmentForestPage
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /** Content Passed in */
                headerName = {EnvironmentForest.headerName}
                forestPhoto = {EnvironmentForest.forestPhoto}
                text = {EnvironmentForest.text}
              />
            )}
          />

          <Route path= "/app/:alphacode/environment-carbon-graph" render = {(props) => (
              <EnvironmentCarbonGraphPage
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /** Content Passed in */
                labels={CarbonGraph.labels}
                headers={CarbonGraph.headers}
                data={CarbonGraph.data}
                text={CarbonGraph.text}
                link="http://upendoagri.com/emissions"
              />
            )}
          />

          <Route path= "/app/:alphacode/environment-net-carbon" render = {(props) => (
              <EnvironmentNetCarbonPage
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                headerName={NetCarbonGraph.headerName}
                labels={NetCarbonGraph.labels}
                data={NetCarbonGraph.data}
                text={NetCarbonGraph.text}
              />
            )}
          />
        
          <Route path= "/app/:alphacode/tanzania-map"render = {(props) => (
              <TanzaniaMapPage /** At the moment this page is static (same for alphacodes) */
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                headerName={this.testFrontEnd ? Forest.forestName : this.state.forest.title}
                mapConfig={{
                  center: {
                    lat: -5.530581224999935,     /** Tanzania Coordinates */
                    lng: 31.674771946000078
                  },
                  zoom: 8,
                  mapTypeId: 'satellite',
                }}

                mapKML={this.state.forest.map_kml}
              />
            )}
          />

          <Route path= "/app/:alphacode/tanzania-forest" render = {(props) => (
              <TanzaniaForestPage
                {...props}
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
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
                /** App functions that retrieve data*/
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
              <HoneyHarvestPage
                {...props}
                /** App functions that retrieve data*/
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
              <HoneyHealthPage
                {...props}
                /** App functions that retrieve data*/
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
                /** App functions that retrieve data*/
                getAlphaCode={this.getAlphaCode}
                setAlphaCode={this.setAlphaCode}
                retrieveAppData={this.retrieveAppData}
                getDataStatus={this.getDataStatus}
                /* Content passed in */
                bk = {this.testFrontEnd ? {letter: Beekeeper.beekeeperLetter, translation: Beekeeper.translation} :
                {letter: this.state.beekeeper.letter_photo, translation: this.state.beekeeper.letter_text}}
              />
            )}
          />
          <Route path = "/app/:alphaCode/beekeeper-message"
            render = {(props) =>
              <BeekeeperMessagePage
                {...props}
                /** App functions that retrieve data*/
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
              /** App functions that retrieve data*/
              getAlphaCode={this.getAlphaCode}
              setAlphaCode={this.setAlphaCode}
              retrieveAppData={this.retrieveAppData}
              getDataStatus={this.getDataStatus}
              /* Content passed in */
              imageURL= {this.testFrontEnd ? Beekeeper.beekeeperPhoto : this.state.beekeeper.photo}
              beekeeperDescription= {this.testFrontEnd ? Beekeeper.beekeeperDescription : this.state.beekeeper.bio}
              beekeeperName={this.testFrontEnd ? Beekeeper.beekeeperName : this.state.beekeeper.name}
              />
            )}
          />
          <Route path = "/" render = {() => (
            <LandingPage
            /** App functions that retrieve data*/ 
            getData={this.getData}
            getAlphaCode={this.getAlphaCode}
            setAlphaCode={this.setAlphaCode}
            getDataStatus={this.getDataStatus}
            />
          )}
          />
        </Switch>
        </GAListener>
      </Router>
    );
  }
}

export default App;
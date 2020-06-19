import React from 'react';
import LandingPage from "./landing-page";
import BeekeeperContainer from "./flows/beekeeper-flow/beekeeper-portrait";

class App extends React.Component {
  render() {
    return (
      <BeekeeperContainer imageURL="https://i1.wp.com/upendoagri.com/wp-content/uploads/2019/12/P1580604-scaled.jpg?resize=1024%2C684"
        beekeeperDescription="Tanzania Beekeeper"
        beekeeperName="Pendo"

      />
    );
  }
}

export default App;
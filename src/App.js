import React, { Component } from "react";
import update from "immutability-helper";
import logo from "./logo.svg";
import "./App.css";
//import { GetData } from "./Cleymore/Cleymore.js";

import Rigboard from "./component/Rigboard.js";

class App extends Component {
  state = {
    AllRigs: { rigs: [] }
  };

  getData = () => {
    return fetch("http://192.168.88.31:3001/rigsnow/")
      .then(response => response.json())
      .catch(function(e) {
        console.log(e);
      });
  };

  //
  updateData = async () => {
    let JSONcur = await this.getData();
    this.setState({
      AllRigs: JSONcur
    });
  };

  componentWillMount() {
    this.updateData();
    this.interval = setInterval(this.updateData, 5000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.AllRigs.rigs.map(data => (
          <Rigboard
            key={data.name}
            RigName={data.name}
            RigAddress={data.address}
            rigGPUCount="3"
            rigInfoBox=""
            rigTotalSpeed="250MH"
            RigStatus={data.status}
          />
        ))}
      </div>
    );
  }
}

export default App;

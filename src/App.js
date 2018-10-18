import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Underbar from "./components/Sidesheet/Underbar";
import Vid from "./components/Sidesheet/Vid";
import { Pane } from "evergreen-ui";
import Maps from "./components/Map/Maps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Underbar />
        <Maps />
      </div>
    );
  }
}

export default App;

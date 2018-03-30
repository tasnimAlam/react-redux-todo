import React, { Component } from "react";
import AddTask from "../containers/AddTask";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <AddTask />
        <Dashboard />
      </div>
    );
  }
}

export default App;

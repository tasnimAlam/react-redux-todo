import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "http://localhost:4000/all";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  getTasks = () => {
    const { data } = this.state;
    return data.map(item => <li key={item.id}>{item.task}</li>);
  };
  
  render() {
    return (
      <div>
        <h3>Tasks </h3>
        <ul>{this.getTasks()}</ul>
      </div>
    );
  }
}

export default App;

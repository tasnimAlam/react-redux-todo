import React, { Component } from "react";

class AddTask extends Component {
  state = {
    task: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onInputChange = e => this.setState({ task: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="add task..."
          value={this.state.task}
          onChange={this.onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTask;

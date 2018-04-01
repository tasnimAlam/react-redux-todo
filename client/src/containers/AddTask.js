import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import addTask from "../actions/action_add";

class AddTask extends Component {
  state = {
    task: ""
  };

  onSubmit = e => {
    const { task } = this.state;
    e.preventDefault();

    const url = "http://localhost:4000/add";
    this.props.addTask(url, task);

    this.setState({ task: "" });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTask);

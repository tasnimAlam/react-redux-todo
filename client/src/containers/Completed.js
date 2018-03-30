import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCompleted } from "../actions/action_completed";

class Completed extends Component {
  componentDidMount() {
    const url = "http://localhost:4000/completed";
    this.props.fetchCompleted(url);
  }

  render() {
    const data = this.props.completed.data;
    if (!data) return null;

    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    completed: state.completed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCompleted }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed);

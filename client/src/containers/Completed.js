import React, { Component } from "react";
import { connect } from "react-redux";

class Completed extends Component {
  render() {
    const data = this.props.completed;
    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    completed: state.completed
  };
}

export default connect(mapStateToProps)(Completed);

import React, { Component } from "react";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    const data = this.props.todos;
    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todos);

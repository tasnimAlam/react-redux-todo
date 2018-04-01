import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTodos } from "../actions/action_todos";

class Todos extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = "http://localhost:4000/todos";
    this.props.fetchTodos(url);
  };

  render() {
    const data = this.props.todos.data;
    if (!data) return null;

    this.fetchData();

    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

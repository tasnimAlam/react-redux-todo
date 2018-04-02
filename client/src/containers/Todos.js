import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTodos } from "../actions/action_todos";
import deleteTask from "../actions/action_delete";
import updateTask from "../actions/action_update";

class Todos extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.addedTask.data !== nextProps.addedTask.data ||
      this.props.deleted !== nextProps.deleted ||
      this.props.updated !== nextProps.updated
    ) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const url = "http://localhost:4000/todos";
    this.props.fetchTodos(url);
  };

  onDelete = id => this.props.deleteTask(id);

  onComplete = id => this.props.updateTask(id);

  render() {
    const data = this.props.todos.data;
    if (!data) return null;

    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span onClick={() => this.onComplete(item.id)}> {item.task}</span>
            <button onClick={() => this.onDelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    addedTask: state.addedTask,
    deleted: state.deleted,
    updated: state.updated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos, deleteTask, updateTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

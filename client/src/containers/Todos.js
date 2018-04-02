import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTodos } from "../actions/action_todos";
import deleteTask from "../actions/action_delete";

class Todos extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.addedTask.data !== nextProps.addedTask.data ||
      this.props.deleted !== nextProps.deleted
    ) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const url = "http://localhost:4000/todos";
    this.props.fetchTodos(url);
  };

  onDelete = id => this.props.deleteTask(id);

  render() {
    const data = this.props.todos.data;
    if (!data) return null;

    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.task}
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
    deleted: state.deleted
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTodos, deleteTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchAll from "../actions/action_all";
import deleteTask from "../actions/action_delete";

class All extends Component {
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
    const url = "http://localhost:4000/all";
    this.props.fetchAll(url);
  };

  onDelete = id => this.props.deleteTask(id);

  render() {
    const data = this.props.all.data;
    if (!data) return null;

    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span>{item.task}</span>
            <button onClick={() => this.onDelete(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    all: state.all,
    addedTask: state.addedTask,
    deleted: state.deleted
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAll, deleteTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(All);

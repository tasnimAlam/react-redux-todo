import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchAll from "../actions/action_all";

class All extends Component {
  componentDidMount() {
    const url = "http://localhost:4000/all";
    this.props.fetchAll(url);
  }

  render() {
    const data = this.props.all.data;
    if (!data) return null;

    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    all: state.all
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAll }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(All);

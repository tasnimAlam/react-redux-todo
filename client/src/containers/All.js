import React, { Component } from "react";
import { connect } from "react-redux";

class All extends Component {
  render() {
    const data = this.props.all;
    return <ul>{data.map(item => <li key={item.id}>{item.task}</li>)}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    all: state.all
  };
}

export default connect(mapStateToProps)(All);

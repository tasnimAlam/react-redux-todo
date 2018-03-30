import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import All from "../containers/All";
import Completed from "../containers/Completed";
import Todos from "../containers/Todos";

const Dashboard = () => (
  <Router>
    <div>
      <Link to="/all">All</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/completed">Completed</Link>

      <Switch>
        <Route path="/all" component={All} />
        <Route path="/completed" component={Completed} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </div>
  </Router>
);

export default Dashboard;

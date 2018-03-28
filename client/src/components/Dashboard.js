import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import All from "./All";

const Dashboard = () => (
  <Router>
    <div>
      <Link to="/all">All</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/completed">Completed</Link>

      <Switch>
        <Route path="/all" component={All} />
        <Route path="/completed" component={All} />
        <Route path="/completed" component={All} />
      </Switch>
    </div>
  </Router>
);

export default Dashboard;

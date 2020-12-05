import React, { Component, useState } from "react";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";
import Invalid from "./Invalid";
import LocationDisplay from "./LocationDisplay";
import { Route, Link, Switch, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Invalid} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
export { LocationDisplay };

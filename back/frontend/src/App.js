import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import AddChild from "./components/AddChild";
import subCategores from "./components/subCategores";
import Game from "./components/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/addchild" component={AddChild} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/subcategores" component={subCategores} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Categories from "./Categories";
import AddChild from "./AddChild";
import subCategores from "./subCategores";
import Game from "./Game";

export class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Link to="/signin">
                  <button>Sign In</button>
                </Link>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            )}
          />

          {/* <p>Hello world </p> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/addchild" component={AddChild} />
          <Route path="/categories" component={Categories} />
          <Route path="/subcategores" component={subCategores} />
          <Route path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}

export default Main;

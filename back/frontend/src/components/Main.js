import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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

          <Route path="/signin" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default Main;

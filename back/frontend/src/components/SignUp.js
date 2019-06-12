import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <h2>Sing up page</h2>
      </div>
    );
  }
}

export default SignUp;

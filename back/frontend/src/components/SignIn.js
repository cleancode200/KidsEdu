import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      found: "false"
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    // this.rend=this.rend.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.state.email) {
      return this.setState({ error: "Email is required" });
    }
    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }
    axios.get("Parent").then(res => {
      let array = res.data;

      for (let i = 0; i < array.length; i++) {
        if (
          this.state.email === array[i].email &&
          this.state.password === array[i].password
        ) {
          console.log("welcome " + array[i].name);
          this.setState({
            found: true
          });
          this.rend();
        }
      }

      if (this.state.found === false) {
        alert("not found ");
      }
    });

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  rend = () => {
    if (this.state.found === true) {
      return <Redirect to="/addchild" />;
    }
  };

  render() {
    return (
      <div className="Signin">
        <form onSubmit={this.handleSubmit}>
          {this.rend()}
          {this.state.error && (
            <h3 onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default SignIn;

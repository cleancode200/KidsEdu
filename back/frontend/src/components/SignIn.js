import React, { Component } from "react";
import axios from "axios";
//for pop up message
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { Redirect, Link } from "react-router-dom";
//import Main from "./Main";

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
    toast.configure();
    evt.preventDefault();
    if (!this.state.email) {
      this.setState({ error: "Email is required" });
      toast("Email is required");
    }
    if (!this.state.password) {
      this.setState({ error: "Password is required" });
      toast("Password is required");
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
            found: true,
            id: array[i].id
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
      // return <Redirect to="/addchild" />;
      console.log(this.state.id);
      return (
        <Redirect
          to={{
            pathname: "/addchild",
            state: { parent_id: this.state.id }
          }}
        />
      );
    }
  };

  render() {
    return (
      <div className="Signin">
        {/* <form onSubmit={this.handleSubmit}>
          {this.rend()}
          {this.state.error && (
            <h3 onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          /> */}
        {/* {this.rend} */}
        {/* <button type="submit">Log in</button>
        </form> */}

        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={this.handleSubmit}
              >
                {this.rend()}
                <span className="login100-form-title p-b-26">Welcome</span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font" />
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is: a@b.c"
                >
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleUserChange}
                    className="input100"
                    name="email"
                  />

                  <span className="focus-input100" data-placeholder="Email" />
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye" />
                  </span>

                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    className="input100"
                    name="pass"
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Password"
                  />
                </div>

                {/* <Link to="/addChild"> */}
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn" type="submit">
                      Login
                    </button>
                  </div>
                </div>
                {/* </Link> */}

                <div className="text-center p-t-115">
                  <span className="txt1">Don’t have an account?</span>

                  <Link to="/signup">
                    <a className="txt2" href="#">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="dropDownSelect1" />
      </div>
    );
  }
}

export default SignIn;

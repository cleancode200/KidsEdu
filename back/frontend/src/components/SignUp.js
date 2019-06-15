import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false
    };
  }
  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onclick() {
    toast.configure();
    const data = this.state;
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var email = document.getElementById("email");
    var name = document.getElementById("name");

    if (password.value !== confirm_password.value) {
      toast("Paswords Don`t Match");
    } else if (email.value === "") {
      toast("Please Enter Your Email");
    } else if (name.value === "") {
      toast("Please Enter Your Name");
    } else {
      var that = this;
      axios({
        method: "POST",
        url: "Parent/",
        data: data,
        config: { headers: { "Content-Type": "application/json	" } }
      })
        .then(function(response) {
          //handle success
          console.log(response.statusText);
          that.setState({
            redirect: true
          });
        })
        .catch(function(response) {
          //handle error

          toast("E-mail is already used or Incorrect sytax ");
        });
    }
  }

  render() {
    var redirect = this.state.redirect;
    console.log(redirect);
    return (
      <div>
        {redirect ? (
          <Redirect to={{ pathname: "/signin" }} />
        ) : (
          <div>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.names}
              onChange={this.onchange.bind(this)}
              placeholder="User name"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.emails}
              onChange={this.onchange.bind(this)}
              placeholder="E-Mail"
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.passwods}
              onChange={this.onchange.bind(this)}
              placeholder="Password"
              required
            />
            <input
              id="confirm_password"
              type="password"
              placeholder="confirm password"
              required
            />
            <button onClick={this.onclick.bind(this)}>Sign Up</button>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;

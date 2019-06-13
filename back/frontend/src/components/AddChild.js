import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  addChild(e) {
    console.log("Sending a GET API Call !!!");
    //e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.age);
    var bodyFormData = new FormData();
    bodyFormData.set("name", "ahmad");
    bodyFormData.set("password", "ahmad");
    bodyFormData.set("email", "a@s.com");
    console.log(bodyFormData);
    axios({
      method: "post",
      url: "Parent/",
      body: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

  render() {
    return (
      <form>
        <h2>AddChild :</h2>
        <input
          type="text"
          placeholder="your child name"
          value={this.state.name}
          onChange={this.change.bind(this)}
          name="name"
        />
        <br />
        <input
          type="number"
          placeholder="your child age"
          min={2}
          max={8}
          value={this.state.age}
          onChange={this.change.bind(this)}
          name="age"
        />
        <br />
        <button onClick={this.addChild.bind(this)}>AddChild</button>
      </form>
    );
  }
}

export default AddChild;

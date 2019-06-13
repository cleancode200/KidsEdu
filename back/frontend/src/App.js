import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Main from "./components/Main";
import AddChild from "./components/AddChild";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_parentId: 1
    };
  }
  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios
      .get("/Parent")
      .then(res => {
        console.log(res);
      })
      .then(response => {
        console.log(JSON.stringify(response));
      });
  }

  render() {
    return (
      <div>
        <Main />
        <AddChild current_parentId={this.current_parentId} />
        {/* <button type="button" onClick={this.onClick}>
          Send GET /products{" "}
        </button> */}
      </div>
    );
  }
}

export default App;

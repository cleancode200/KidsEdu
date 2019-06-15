import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import axios from "axios";
import "./App.css";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import AddChild from "./components/AddChild";
import subCategores from "./components/subCategores";
import Game from "./components/Game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_parentId: "1"
    };
  }
  // onClick(ev) {
  //   console.log("Sending a GET API Call !!!");
  //   axios
  //     .get("Parent/")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .then(response => {
  //       console.log(JSON.stringify(response));
  //     });
  // }
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

          {/* <SignIn /> */}
          {/* <AddChild current_parentId={this.current_parentId} /> */}
          {/* <Categories /> */}

          {/* <button type="button" onClick={this.onClick}>
          Send GET /products{" "}
        </button> */}
        </div>
      </Router>
    );
  }
}

export default App;

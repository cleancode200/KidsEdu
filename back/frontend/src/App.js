import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import UploadImages from "./components/UploadImages";
import AddChild from "./components/AddChild";
import subCategores from "./components/subCategores";
import Flipgame from "./flipgame.js";
import ParentProfile from "./components/ParentProfile";
import Profile from "./components/Profile";
import Planet from "./components/Planet";
import Animal from "./components/Animal";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/UploadImages" component={UploadImages} />
          <Route exact path="/addchild" component={AddChild} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/subcategores" component={subCategores} />
          <Route exact path="/Flipgame" component={Flipgame} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Planet" component={Planet} />
          <Route exact path="/Animal" component={Animal} />

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

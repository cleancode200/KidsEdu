import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";
export class subCategores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      redirect: false
    };
  }
  goToSubCategories(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect: true
    });
  }
  render() {
    var redirect = this.state.redirect;
    console.log(redirect);
    return (
      <div>
        
        <div>
          <img
            src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/05/tom-and-jerry-warner-bros.jpg?itok=nNIChfNa"
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories.bind(this)}
          />
          {redirect ? (
            <Redirect to={{ pathname: "/subCategoriesLanguage" }} />
          ) : null}
          <img
            src="../public/resources/image01.jpg"
            alt="Videos"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect to={{ pathname: "/subCategoriesVideos" }} />
          ) : null}
          <img
            src=""
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? <Redirect to={{ pathname: "/game" }} /> : null}
        </div>
      </div>
    );
  }
}

export default subCategores;

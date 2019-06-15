import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from "axios";
export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      url: "",
      urlMatch: "",
      redirect: false,
      toggle: false,
      counter: 0
    };
  }
  toggleCard(e) {
    console.log("card is toggled");

    if (this.state.url === this.state.urlMatch) {
      this.setState({
        toggle: true
      });
    }
  }
  componentDidMount() {
    // console.log("Sending a GET API Call !!!");
    var that = this;
    axios.get("Media/").then(res => {
      // console.log(res.data[0].img_url);
      // console.log(res.data.length);
      var urlsArr = that.state.urls;
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      that.setState({
        urls: urlsArr
      });
    });
  }
  render() {
    var redirect = this.state.redirect;
    console.log(redirect);
    return (
      <div>
        <div align="center">
          <img
            src={this.state.urls[2]}
            alt="Language"
            height="100%"
            width="20%"
            border="5"
            hspace="20"
          />

          <img
            src={this.state.urls[3]}
            alt="Videos"
            height="100%"
            width="20%"
            border="5"
          />
          <br />
          <img
            src={this.state.urls[4]}
            alt="Language"
            height="100%"
            width="20%"
            border="5"
            hspace="20"
          />

          <img
            src={this.state.urls[5]}
            alt="Videos"
            height="100%"
            width="20%"
            border="5"
          />
        </div>
      </div>
    );
  }
}

export default Game;

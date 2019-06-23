import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class subCategores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      urls: [],
      game_img_urls: [],
      redirect1: false,
      redirect2: false,
      redirect3: false,
      child_info: this.props.location.state.child_info,
      role: ""
    };
  }
  goToSubCategories1(e) {
    console.log("going to subCategories");
    var role = "letter";
    axios.get("/Media/?role=" + role).then(res => {
      console.log(res.data);
      var urlsArr = [];
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      this.setState({
        redirect1: true,
        game_img_urls: urlsArr.slice(),
        role: role
      });
    });
  }
  goToSubCategories2(e) {
    console.log("going to subCategories");
    var role = "animal";
    axios.get("/Media/?role=" + role).then(res => {
      var urlsArr = [];
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      this.setState({
        redirect2: true,
        game_img_urls: urlsArr,
        role: role
      });
    });
  }
  goToSubCategories3(e) {
    var role = "plant";
    axios.get("/Media/?role=" + role).then(res => {
      // axios.get("/Media").then(response => {
      //   console.log(JSON.stringify(response));
      // });
      var urlsArr = [];
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      this.setState({
        redirect3: true,
        game_img_urls: urlsArr,
        role: role
      });
    });
  }
  componentWillMount() {
    // console.log("Sending a GET API Call !!!");
    var that = this;
    var role = "subcategories";
    axios.get("/Media/?role=" + role).then(res => {
      // console.log(res.data[0].img_url);
      // console.log(res.data.length);
      var urlsArr = [];
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }
      that.setState({
        urls: urlsArr
      });
      console.log(that.state.child_info);
    });
  }
  render() {
    var redirect1 = this.state.redirect1;
    var redirect2 = this.state.redirect2;
    var redirect3 = this.state.redirect3;
    console.log(this.state.child_info);
    return (
      <div>
        <div>
          <img
            src={this.state.urls[0]}
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories1.bind(this)}
          />
          {redirect1 ? (
            <Redirect
              to={{
                pathname: "/flipgame",
                state: {
                  child_info: this.state.child_info,
                  img_url: this.state.game_img_urls,
                  role: this.state.role
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[1]}
            alt="Videos"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories2.bind(this)}
          />
          {redirect2 ? (
            <Redirect
              to={{
                pathname: "/flipgame",
                state: {
                  child_info: this.state.child_info,
                  img_url: this.state.game_img_urls,
                  role: this.state.role
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[2]}
            alt="Stores"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories3.bind(this)}
          />
          {redirect3 ? (
            <Redirect
              to={{
                pathname: "/flipgame",
                state: {
                  child_info: this.state.child_info,
                  img_url: this.state.game_img_urls,
                  role: this.state.role
                }
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default subCategores;

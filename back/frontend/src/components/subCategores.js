import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class subCategores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      urls: [],
      redirect1: false,
      redirect2: false,
      redirect3: false,
      child_info: this.props.location.state.child_info
    };
  }
  goToSubCategories1(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect1: true
    });
  }
  goToSubCategories2(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect2: true
    });
  }
  goToSubCategories3(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect3: true
    });
  }
  componentDidMount() {
    // console.log("Sending a GET API Call !!!");
    var that = this;
    axios.get("Media/").then(res => {
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
            src={this.state.urls[29]}
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
                  img_url: this.state.urls
                }
              }}
            />
          ) : null}
          <img
            src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/05/tom-and-jerry-warner-bros.jpg?itok=nNIChfNa"
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
                  img_url: this.state.urls
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[10]}
            alt="Stores"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories3.bind(this)}
          />
          {redirect3 ? (
            <Redirect
              to={{
                pathname: "/Planet",
                state: {
                  child_info: this.state.child_info,
                  img_url: this.state.urls
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

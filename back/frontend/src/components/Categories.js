import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      redirect: false,
      child_Id: this.props.location.state.child_Id
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
      console.log(that.state.child_Id);
    });
  }
  render() {
    var redirect = this.state.redirect;
    // console.log(redirect);
    return (
      <div>
        <div>
          <img
            src={this.state.urls[0]}
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories.bind(this)}
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_Id: this.state.child_Id
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[1]}
            alt="Videos"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_Id: this.state.child_Id
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[1]}
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_Id: this.state.child_Id
                }
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Categories;

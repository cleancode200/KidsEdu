import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
      this.state.redirect1 = true;
      this.setState({
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
        <header id="headerr">
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <Link to="/">
                <div id="logo">
                  <img src="homepageTemplete/img/logo-rocket.png" alt="" title="" />
                </div>
              </Link>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li>
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/Profile",
                        state: {
                          child_info: this.state.child_info,
                          parentName: this.state.parentName,
                          childsName: this.state.childsName
                        }
                      }}
                    >
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <a>Register</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signin">
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* <!-- #nav-menu-container --> */}
            </div>
          </div>
        </header>

        {/* <div>
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
        </div> */}
        <section className="content-section111">
          <div className="container">
            <div className="row no-gutters">
              <div
                className="col-lg-6"
                onClick={this.goToSubCategories1.bind(this)}
              >
                <div className="portfolio-item">
                  <span className="caption" />
                  <img
                    className="img-fluid111"
                    src="https://image.freepik.com/free-vector/floral-patterned-letters_53876-32574.jpg"
                    alt=""
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
                </div>
              </div>
              <div className="col-lg-6" onClick={this.goToSubCategories2.bind(this)}>
                <div className="portfolio-item">
                  <span className="caption" />
                  <img
                    className="img-fluid111"
                    width="710"
                    height="492"
                    src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A14O613A5OP4S1/de0fcbde-6f1a-4af9-89c7-3519cf367b43._CR0,79,1200,742_PT0_SX970__.jpg"
                    alt=""
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
                </div>
              </div>
              <div className="col-lg-6" onClick={this.goToSubCategories3.bind(this)} >
                <div className="portfolio-item">
                  <span className="caption" />
                  <img
                    className="img-fluid111"
                    src="https://image.freepik.com/free-photo/delicious-vegetables-space-middle_23-2147681450.jpg"
                    alt=""
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
              <div className="col-lg-6">
                <a className="portfolio-item" href="#">
                  <span className="caption" />
                  <img
                    className="img-fluid111"
                    src="https://i.ytimg.com/vi/xW2bjae5LPM/maxresdefault.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default subCategores;

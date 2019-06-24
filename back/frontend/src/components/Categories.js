import React, { Component } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";
import axios from "axios";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      redirect: false,
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName
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

    var role = "categories";
    var that = this;
    axios.get("/Media/?role=" + role).then(res => {
      // console.log(res.data[0].img_url);
      // console.log(res.data.length);
      // console.log(res.data);
      var urlsArr = that.state.urls;
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        urlsArr.push(res.data[i].img_url);
      }

      that.setState({
        urls: urlsArr
      });
      // console.log(that.state.child_info);
    });
  }
  render() {
    var redirect = this.state.redirect;
    // console.log(redirect);
    return (
      <div>
        <header id="headerr">
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <Link to="/">
                <div id="logo">
                  {/* <a href="index.html"> */}
                  <img src="homepageTemplete/img/logo.png" alt="" title="" />
                  {/* </a> */}
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
                    {/* <Link to="/">
                      <a>Profile</a>
                      {/* <Link to="/">
                      <a>Profile</a>*/}
                    {/* </Link> */}
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
                  {/* <li className="menu-has-children"><a href="">Pages</a>
							<ul>
								<li><a href="elements.html">Elements</a></li>
							</ul>
						</li> */}
                  {/* <li className="menu-has-children"><a href="">Blog</a>
							<ul>
								<li><a href="blog-home.html">Blog Home</a></li>
								<li><a href="blog-single.html">Blog Details</a></li>
							</ul>
						</li> */}
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* <!-- #nav-menu-container --> */}
            </div>
          </div>
        </header>
        {/* <div className="profile_button_div">
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
            <button className="Profile_button">profile</button>
          </NLink>
        </div>
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
                  child_info: this.state.child_info
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
                  child_info: this.state.child_info
                }
              }}
            />
          ) : null}
          <img
            src={this.state.urls[2]}
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? (
            <Redirect
              to={{
                pathname: "/subCategores",
                state: {
                  child_info: this.state.child_info
                }
              }}
            />
          ) : null}
        </div> */}
        <section className="feature-area body123">
          <div className="container">
            <div className="feature-inner row">
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  {/* <i className="ti-crown" /> */}
                  {/* <h4>[Title]</h4>
                  <div
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                  </div> */}
                  <img
                    src={this.state.urls[0]}
                    onClick={this.goToSubCategories.bind(this)}
                  />
                  {redirect ? (
                    <Redirect
                      to={{
                        pathname: "/subCategores",
                        state: {
                          child_info: this.state.child_info
                        }
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  {/* <i className="ti-briefcase" />
                  <h4>[Title]</h4>
                  <div
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consec tetur adipisicing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                  </div> */}
                  <img
                    src={this.state.urls[0]}
                    onClick={this.goToSubCategories.bind(this)}
                  />
                  {redirect ? (
                    <Redirect
                      to={{
                        pathname: "/subCategores",
                        state: {
                          child_info: this.state.child_info
                        }
                      }}
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-item1">
                  <img
                    src={this.state.urls[0]}
                    onClick={this.goToSubCategories.bind(this)}
                  />
                  {redirect ? (
                    <Redirect
                      to={{
                        pathname: "/subCategores",
                        state: {
                          child_info: this.state.child_info
                        }
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* <!-- Portfolio --> */}
        {/* <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center" />
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="portfolio-item">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Language</h2>
                    </span>
                  </span>
                  <img
                    className="img-fluid"
                    src={this.state.urls[0]}
                    onClick={this.goToSubCategories.bind(this)}
                  />
                  {redirect ? (
                    <Redirect
                      to={{
                        pathname: "/subCategores",
                        state: {
                          child_info: this.state.child_info
                        }
                      }}
                    />
                  ) : null}
                </div>
              </div>

              <div className="col-lg-6">
                <a className="portfolio-item" href="#">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Ice Cream</h2>
                      <p className="mb-0">
                        A dark blue background with a colored pencil, a clip,
                        and a tiny ice cream cone!
                      </p>
                    </span>
                  </span>
                  <img
                    className="img-fluid"
                    src="templets\images\portfolio-2.jpg"
                    alt=""
                    onClick={this.goToSubCategories.bind(this)}
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="#">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Strawberries</h2>
                      <p className="mb-0">
                        Strawberries are such a tasty snack, especially with a
                        little sugar on top!
                      </p>
                    </span>
                  </span>
                  <img
                    className="img-fluid"
                    src={this.state.urls[0]}
                    alt=""
                    onClick={this.goToSubCategories.bind(this)}
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="#">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Workspace</h2>
                      <p className="mb-0">
                        A yellow workspace with some scissors, pencils, and
                        other objects.
                      </p>
                    </span>
                  </span>
                  <img
                    className="img-fluid"
                    src={this.state.urls[0]}
                    alt=""
                    onClick={this.goToSubCategories.bind(this)}
                  />
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/*  */}
        {/* Footer start */}
        <footer className="footer-areaa section-gap">
          <div className="container">
            <div className="footer-bottom row align-items-center">
              <p className="footer-text m-0 col-lg-8 col-md-12">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  EduKids Team
                </a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
              <div className="col-lg-4 col-md-12 footer-social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Categories;

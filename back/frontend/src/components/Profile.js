import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import PieChart from "react-minimal-pie-chart";
import axios from "axios";
import "./styles/Profile.css";
const style ={
  "margin-top": "50px"
}


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName,
      childEvaluation: [],
      index: 0
    };
  }

  saveNumber(id) {
    console.log(id);
    var child_id = id;
    var that = this;
    axios.get("Ach/?child_id=" + child_id).then(res => {
      console.log(res.data);
      that.setState({
        childEvaluation: res.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <header id="headerr">
              <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                    <img src="homepageTemplete/img/logo-rocket.png" alt="" title="" />
                  </div>
                  <nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <NavLink
                          to={{
                            pathname: "/categories",
                            state: {
                              child_info: this.state.child_info,
                              parentName: this.state.parentName,
                              childsName: this.state.childsName
                            }
                          }}
                        >
                          <a>categories </a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={{
                            pathname: "/addchild",
                            state: {
                              parent_id: this.state.child_info.parent_id,
                              parentName: this.state.parentName
                            }
                          }}
                        >
                          <a>change the player</a>
                        </NavLink>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </div>
          <div className="col-sm-12" style={style}>
            <div className="">
              <div className="wrapper2child">
                <div className="playerCard">
                  <div className="card-top">
                    {this.state.child_info.name}
                    {" " + this.state.child_info.age + "years "}
                  </div>
                  <div className="profile-pic">
                    <img
                      onClick={() => this.saveNumber(this.state.child_info.id)}
                      alt="child pic"
                      src="https://flintobox.com/blog/wp-content/uploads/2016/09/400-400-img-min.jpg"
                    />
                  </div>
                  <div className="profileDiv">
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <PieChart
                          data={[
                            {
                              title: "One",
                              value: this.state.child_info.age,
                              color: "#E38627"
                            },
                            {
                              title: "Two",
                              value: 15,
                              color: "#C13C37"
                            },
                            {
                              title: "Three",
                              value: 20,
                              color: "#6A2135"
                            }
                          ]}
                          lineWidth={20}
                          paddingAngle={18}
                          animate
                          rounded
                          label
                          labelStyle={{
                            fontSize: "5px",
                            fontFamily: "sans-serif"
                          }}
                          // labelStyle={{
                          //   fontSize: '5px',
                          //   fontFamily: 'sans-serif'
                          // }}
                          labelPosition={60}
                          radius={42}
                          labelPosition={112}
                        />
                      </div>
                      <div className="col-sm-6 pieDes">
                        <div className="row">
                          <div className="col-sm-4">
                            <span className="pieDes1"> pieDes </span> Latters
                          </div>
                          <div className="col-sm-4">
                            <span className="pieDes2"> pieDes </span> Animals
                          </div>
                          <div className="col-sm-4">
                            <span className="pieDes3"> pieDes </span> Vegetables
                            and Fruits
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

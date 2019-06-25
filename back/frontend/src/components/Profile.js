import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import axios from "axios";
import "./styles/Profile.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName,
      index: 0
    };
  }

  saveNumber(id) {
    console.log(id);
    var child_id = id;
    axios.get("Ach/?child_id=" + child_id).then(res => {
      console.log(res.data);
    });
    // this.setState({
    //   index: i
    // });
    // return this.openmodal("childEvaluation");
  }

  //   componentWillMount() {
  //     axios.get("/Ach").then(function(res) {
  //       var childarray = res.data;
  //       for (var i = 0; i < childarray.length; i++) {
  //         if (
  //           childarray[i].name === that.state.name &&
  //           that.props.location.state.parent_id === childarray[i].parent_id
  //         ) {
  //           dublication = true;
  //         }
  //       }
  //       if (dublication === true) {
  //         toast("Child name is already exists ");
  //       }
  //     });
  //   }
  render() {
    // console.log(this.state.childsName[this.state.index]);
    console.log(this.state.childsName);
    console.log(this.state.child_info);
    console.log(this.state.parentName);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <header id="headerr">
              <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                    <img src="homepageTemplete/img/logo.png" alt="" title="" />
                  </div>
                  <nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li className="menu-active">
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
                  {/* <!-- #nav-menu-container --> */}
                </div>
              </div>
            </header>
          </div>
          <div className="col-sm-12">
            <div className="">
              <div className="wrapper2child">
                <div className="playerCard">
                  <div className="card-top" />
                  <div className="profile-pic">
                    <img
                      alt="child pic"
                      src="https://flintobox.com/blog/wp-content/uploads/2016/09/400-400-img-min.jpg"
                    />
                  </div>
                  <div className="">
                    <div>
                      <button
                        type="button"
                        className="linkbtn btn btn-link"
                        onClick={() =>
                          this.saveNumber(this.state.child_info.id)
                        }
                      >
                        {this.state.child_info.name}
                      </button>
                    </div>

                    <div className="tweet">
                      <p className="agePara">
                        {" "}
                        Age : {this.state.child_info.age}
                      </p>
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

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-awesome-modal";
import "./styles/AddChild.css";

export class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      AddChild: false,
      redirect1: false,
      dublication: false,
      names: []
    };
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addChild(e) {
    e.preventDefault();
    toast.configure();
    var body = {
      name: this.state.name,
      age: this.state.age,
      parent_id: this.props.location.state.parent_id
    };
    var that = this;
    var dublication = false;
    axios
      .get("/Child")
      .then(function(res) {
        var childarray = res.data;
        for (var i = 0; i < childarray.length; i++) {
          if (
            childarray[i].name === that.state.name &&
            that.props.location.state.parent_id === childarray[i].parent_id
          ) {
            dublication = true;
          }
        }
        if (dublication === true) {
          toast("Child name is already exists ");
        }
      })
      .then(function() {
        if (
          dublication === false &&
          that.state.age <= 8 &&
          that.state.age >= 4
        ) {
          console.log("post new child");
          axios({
            method: "POST",
            url: "/Child/",
            data: body,
            config: { headers: { "Content-Type": "application/json" } }
          })
            .then(function(response) {
              var namesArr = that.state.names;
              namesArr.push(response.data.name);
              //handle success
              that.setState({
                names: namesArr
              });
            })
            .catch(function(response) {
              //handle error
            });
        } else {
          console.log("age");
          alert("age limit violation");
          //toast("please enter age between 4 to 8");
        }
      });
  }
  redirectToCategories(index) {
    if (this.state.dublication === false) {
      this.setState(
        {
          redirect1: true,
          child_info: this.state.childInfo[index]
        },
        () => {
          console.log(this.state.child_info);
        }
      );
    }
  }

  componentDidMount() {
    var that = this;
    let parentid = that.props.location.state.parent_id;
    console.log(parentid);
    axios.get("Child").then(res => {
      var childarray = res.data;
      console.log(childarray);
      var namesArr = that.state.names;
      var childInfo = [];
      // console.log(childarray);
      // console.log(childarray[0].name);
      // console.log(that.state.names);
      for (var i = 0; i < childarray.length; i++) {
        if (childarray[i].parent_id === parentid) {
          namesArr.push(childarray[i].name);
          childInfo.push(childarray[i]);
        }
      }
      that.setState({
        names: namesArr,
        childInfo: childInfo
      });
      console.log(that.state.childInfo);
    });
  }

  openmodal(e) {
    this.setState({
      [e]: true
    });
  }

  closemodal(e) {
    this.setState({
      [e]: false
    });
  }

  render() {
    var redirect = this.state.redirect1;
    return (
      <div>
        <input
          className="AddChildbtn"
          type="button"
          value="AddChild"
          onClick={() => this.openmodal("AddChild")}
        />

        <Modal
          visible={this.state.AddChild}
          width="390px"
          height="250px"
          effect="fadeInDown"
          onClickAway={() => this.closemodal("AddChild")}
        >
          <div className="wrap-login100">
            <form className="login100-form">
              <div className="wrap-input100">
                <label htmlFor="inputChildName">
                  <b>Child name</b>
                </label>
                <input
                  type="text"
                  className=""
                  id="inputChildName"
                  placeholder="Enter your Child name"
                  value={this.state.name}
                  onChange={this.change.bind(this)}
                  name="name"
                />
              </div>
              <div className="wrap-input100 validate-input">
                <label htmlFor="inputChildAge">
                  <b>Child age</b>
                </label>
                <input
                  type="number"
                  placeholder="Your child age"
                  className="form-control"
                  id="inputChildAge"
                  min={4}
                  max={8}
                  value={this.state.age}
                  onChange={this.change.bind(this)}
                  name="age"
                />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="addBtn" onClick={this.addChild.bind(this)}>
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
        {this.state.names.map((child, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                this.redirectToCategories(index);
              }}
            >
              {child}
            </p>
          );
        })}
        {redirect ? (
          <Redirect
            to={{
              pathname: "/categories",
              state: { child_info: this.state.child_info }
            }}
          />
        ) : null}
      </div>
    );
  }
}
export default AddChild;

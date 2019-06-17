import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-awesome-modal";
import SignUp from "./SignUp.js";

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
    var that = this;
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
          width="600"
          height="350"
          effect="fadeInDown"
          onClickAway={() => this.closemodal("AddChild")}
        >
          <div>
            <form className="AddChild">
              <h2>AddChild :</h2>
              <input
                type="text"
                placeholder="your child name"
                value={this.state.name}
                onChange={this.change.bind(this)}
                name="name"
              />
              <br />
              <input
                type="number"
                placeholder="Your child age"
                min={4}
                max={8}
                value={this.state.age}
                onChange={this.change.bind(this)}
                name="age"
              />
              <br />
              <button onClick={this.addChild.bind(this)}>Add</button>
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

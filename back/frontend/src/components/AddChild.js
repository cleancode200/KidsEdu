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
            url: "Child/",
            data: body,
            config: { headers: { "Content-Type": "application/json" } }
          })
            .then(function(response) {
              var childarray = response.data;
              var childInfo = that.state.childInfo;
              childInfo.push(childarray);
              var namesArr = that.state.names;
              namesArr.push(response.data.name);
              //handle success
              that.setState(
                {
                  names: namesArr,
                  childInfo: childInfo
                },
                () => {
                  console.log(childarray);
                  console.log(that.state);
                  console.log(childarray);
                }
              );
            })
            .catch(function(response) {
              //handle error
            });
        } else {
          console.log("age");
          alert("age limit violation");
          //toast("please enter age between 4 to 8");
        }
      })
      .then(function() {
        that.setState({
          AddChild: false
        });
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
          console.log(index);
          console.log(this.state.child_info);
        }
      );
    }
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

  componentWillMount() {
    var that = this;
    let parentid = that.props.location.state.parent_id;
    console.log(parentid);
    axios.get("/Child/?parent_id=" + parentid).then(res => {
      var childarray = res.data;
      console.log(childarray);
      var namesArr = that.state.names;
      var childInfo = [];
      // console.log(childarray);
      // console.log(childarray[0].name);
      // console.log(that.state.names);
      for (var i = 0; i < childarray.length; i++) {
        namesArr.push(childarray[i].name);
        childInfo.push(childarray[i]);
      }
      that.setState({
        names: namesArr,
        childInfo: childInfo
      });
      console.log(that.state.childInfo);
    });
  }

  render() {
    var redirect = this.state.redirect1;
    return (
      <div className="wrapperAddChild">
        <div className="inner1AddChild">
          <Modal
            visible={this.state.AddChild}
            width="390px"
            height="250px"
            effect="fadeInDown"
            onClickAway={() => this.closemodal("AddChild")}
          >
            <div className="inner1AddChild">
              <img
                src="templets/images/image-1.png"
                alt=""
                className="image-11"
              />

              <div>
                <form className="the_form">
                  <h3 className="h3_tag">New child</h3>
                  <div className="form-holder1234">
                    <span className="lnr lnr-user" />
                    <input
                      type="text"
                      className="form-control123"
                      id="inputChildName"
                      placeholder="Enter your Child name"
                      value={this.state.name}
                      onChange={this.change.bind(this)}
                      name="name"
                    />
                  </div>
                  <div className="form-holder1234">
                    <span className="lnr lnr-smile" />
                    <input
                      type="number"
                      placeholder="Your child age"
                      className="form-control123"
                      id="inputChildAge"
                      min={4}
                      max={8}
                      value={this.state.age}
                      onChange={this.change.bind(this)}
                      name="age"
                    />
                  </div>

                  <button
                    className="button_class"
                    onClick={this.addChild.bind(this)}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
            <img
              src="templets\images\image-2.png"
              alt=""
              className="image-21"
            />
          </Modal>
          {this.state.names.map((child, index) => {
            return (
              <div key={index + 4} className="wrapper2child">
                <div key={index + 3} className="tweet-cards">
                  <div key={index + 2} className="card-top" />
                  <div key={index + 1} className="profile-pic">
                    <img
                      alt="child pic"
                      src="https://flintobox.com/blog/wp-content/uploads/2016/09/400-400-img-min.jpg"
                    />
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="linkbtn btn btn-link"
                      id="name"
                      key={index}
                      onClick={() => {
                        this.redirectToCategories(index);
                      }}
                    >
                      {child}
                    </button>

                    <div className="tweet">
                      My Design for tweet cards used in Tweet-Finder is now up
                      on @CodePen. Check it out and let me know what you think!
                    </div>
                    <p id="date">10m</p>
                  </div>
                </div>
              </div>
            );
          })}
          {redirect ? (
            <Redirect
              to={{
                pathname: "/categories",
                state: {
                  child_info: this.state.child_info,
                  parentName: this.props.location.state.parentName,
                  childsName: this.state.names
                }
              }}
            />
          ) : null}
          <div className="addDiv">
            <img
              className="addImg"
              alt="child pic"
              src="http://pngimg.com/uploads/plus/plus_PNG65.png"
              onClick={() => this.openmodal("AddChild")}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AddChild;

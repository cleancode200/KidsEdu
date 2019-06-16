import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      redirect1: false,
      dublication: false,
      names: []
    };
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  addChild(e) {
    e.preventDefault();

    console.log(this.props.location.state.parent_id);
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
        console.log(childarray);
        console.log(that.state.name);
        console.log(that.props.location.state.parent_id);
        for (var i = 0; i < childarray.length; i++) {
          if (
            childarray[i].name === that.state.name &&
            that.props.location.state.parent_id === childarray[i].parent_id
          ) {
            dublication = true;
          }
        }
        if (dublication === true) {
          alert("child name exists ");
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
                names: namesArr,
                child_Id: response.data.id
              });
              console.log(that.state.child_Id);
              console.log(response.data);
              console.log(that.state.name);
              console.log(that.props.location.state.parent_id);
            })
            .catch(function(response) {
              //handle error
              console.log(response);
            });
        } else if (that.state.age > 8 && that.state.age < 4) {
          alert("age limit violation");
        }
      });
  }
  redirectToCategories() {
    if (this.state.dublication === false) {
      this.setState({
        redirect1: true
      });
    }
  }

  render() {
    var redirect = this.state.redirect1;
    return (
      <div>
        <form>
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
          <button onClick={this.addChild.bind(this)}>AddChild</button>
        </form>
        {this.state.names.map((child, index) => {
          return (
            <p key={index} onClick={this.redirectToCategories.bind(this)}>
              {child}
            </p>
          );
        })}
        {redirect ? (
          <Redirect
            to={{
              pathname: "/categories",
              state: {
                child_Id: this.state.child_Id
              }
            }}
          />
        ) : null}
      </div>
    );
  }
}
export default AddChild;

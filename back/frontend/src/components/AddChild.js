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
    console.log("Sending a GET API Call !!!");
    e.preventDefault();
    var body = {
      name: this.state.name,
      age: this.state.age,
      parent_id: "1"
    };
    var that = this;
    axios({
      method: "POST",
      url: "/Child/",
      data: body,
      config: { headers: { "Content-Type": "application/json" } }
    })
      .then(function(response) {
        var x = that.state.names;
        x.push(response.data.name);
        //handle success
        that.setState({
          names: x
        });
        console.log(that.state.names);
        console.log(response.data.name);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }
  redirectToCategories() {
    this.setState({
      redirect1: true
    });
  }

  render() {
    var redirect = this.state.redirect1;
    console.log(redirect);
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
        {redirect ? <Redirect to={{ pathname: "/categories" }} /> : null}
      </div>
    );
  }
}
// this.props.resultOfSer.map(function(name, index) {
//   return (
//     <div
//       key={index}
//       className="card"
//       name={name.id}
//       onClick={that.props.openModal.bind(this, name.id)}
//     >
//       <img src={name.img} style={{ width: 100 + "%" }} />
//       <h2 className="cardtext">{name.name}</h2>
//       <h3 className="cardtext">{name.summary}</h3>
//       <h3 className="cardtext">{name.reatingText}</h3>
//       <span className="stars">Rate: {that.stars(name.rate)}</span>
//       <br />
//     </div>

export default AddChild;

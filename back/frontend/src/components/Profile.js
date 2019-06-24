import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Modal from "react-awesome-modal";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName,
      childEvaluation: false,
      index: 0
    };
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
  saveNumber(id) {
    console.log(id);
    var child_id = id;
    // axios("/Parent/?email=" + email + "&password=" + password).then(res => {
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
      <div>
        <div>
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
            <button>categories </button>
          </NavLink>
          <NavLink
            to={{
              pathname: "/addchild",
              state: {
                parent_id: this.state.child_info.parent_id,
                parentName: this.state.parentName
              }
            }}
          >
            <br />
            <button>change the player</button>
          </NavLink>
        </div>
        <div>
          <h1>{this.state.parentName}</h1>
          childreen names:
          <h1 onClick={() => this.saveNumber(this.state.child_info.id)}>
            {this.state.child_info.name}
          </h1>
        </div>
        <Modal
          visible={this.state.childEvaluation}
          width="390px"
          height="250px"
          effect="fadeInDown"
          onClickAway={() => this.closemodal("childEvaluation")}
        >
          <h1> The evaluation for child</h1>
          <p>{this.state.childsName[this.state.index]}</p>
        </Modal>
      </div>
    );
  }
}

export default Profile;

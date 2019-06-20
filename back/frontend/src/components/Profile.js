import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Modal from "react-awesome-modal";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName,
      childEvaluation: false
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
  render() {
    console.log(this.state.childsName);
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
          {this.state.childsName.map((childName, i) => {
            return (
              <h1 onClick={() => this.openmodal("childEvaluation")}>
                {childName}
              </h1>
            );
          })}
        </div>
        <Modal
          visible={this.state.childEvaluation}
          width="390px"
          height="250px"
          effect="fadeInDown"
          onClickAway={() => this.closemodal("childEvaluation")}
        >
          <h1> The evaluation for child</h1>
        </Modal>
      </div>
    );
  }
}

export default Profile;

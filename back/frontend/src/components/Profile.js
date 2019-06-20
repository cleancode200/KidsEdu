import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child_info: this.props.location.state.child_info,
      parentName: this.props.location.state.parentName,
      childsName: this.props.location.state.childsName
    };
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
          {this.state.childsName.map((childName, i) => {
            return <h1>{childName}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default Profile;

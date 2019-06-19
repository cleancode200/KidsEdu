import React, { Component } from "react";
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            child_info: this.props.location.state.child_info,
            parentName:this.props.location.state.parentName 

        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.parentName}</h1>
            </div>
        )
    }


}


export default Profile
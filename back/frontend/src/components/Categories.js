import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      redirect: false
    };
  }
  goToSubCategories(e) {
    console.log("going to subCategories");
    // axios.get("/Media").then(response => {
    //   console.log(JSON.stringify(response));
    // });
    this.setState({
      redirect: true
    });
  }
  render() {
    var redirect = this.state.redirect;
    console.log(redirect);
    return (
      <div>
        <div>
          <img
            src="https://image.freepik.com/free-vector/language-word-concept-with-flat-design_23-2147866907.jpg"
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories.bind(this)}
          />
          {redirect ? <Redirect to={{ pathname: "/subCategores" }} /> : null}
          <img
            src="https://s3.amazonaws.com/tinycards/image/377e944a5407032e91b6e77f24072541"
            alt="Videos"
            height="100%"
            width="33%"
          />
          {redirect ? <Redirect to={{ pathname: "/subCategores" }} /> : null}
          <img
            src="https://s3.amazonaws.com/tinycards/image/377e944a5407032e91b6e77f24072541"
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? <Redirect to={{ pathname: "/subCategores" }} /> : null}
        </div>
      </div>
    );
  }
}

export default Categories;

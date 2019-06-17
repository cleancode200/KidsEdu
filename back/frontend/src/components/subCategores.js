import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export class subCategores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      redirect: false,
      child_Id: this.props.location.state.child_Id
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
    console.log(this.state.child_Id);
    return (
      <div>
        <div>
          <img
            src="https://i1.wp.com/cms-assets.tutsplus.com/uploads/users/346/posts/27983/image/geo_hex5.jpg?w=1320&ssl=1"
            alt="Language"
            height="100%"
            width="33%"
            onClick={this.goToSubCategories.bind(this)}
          />
          {redirect ? <Redirect to={{ pathname: "/flipgame" }} /> : null}
          <img
            src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/05/tom-and-jerry-warner-bros.jpg?itok=nNIChfNa"
            alt="Videos"
            height="100%"
            width="33%"
          />
          {redirect ? <Redirect to={{ pathname: "/flipgame" }} /> : null}
          <img
            src="https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/05/tom-and-jerry-warner-bros.jpg?itok=nNIChfNa"
            alt="Stores"
            height="100%"
            width="33%"
          />
          {redirect ? <Redirect to={{ pathname: "/flipgame" }} /> : null}
        </div>
      </div>
    );
  }
}

export default subCategores;

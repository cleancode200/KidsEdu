import React, { Component } from "react";

import Main from "./components/Main";

class App extends Component {
  // onClick(ev) {
  //   console.log("Sending a GET API Call !!!");
  //   axios
  //     .get("Parent/")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .then(response => {
  //       console.log(JSON.stringify(response));
  //     });
  // }
  render() {
    return (
      <div>
        <Main />
        {/* <button type="button" onClick={this.onClick}>
          Send GET /products{" "}
        </button> */}
      </div>
    );
  }
}

export default App;

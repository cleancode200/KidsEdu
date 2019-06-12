import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
render() {
    return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <button type="button" onClick={this.onClick}>Send GET /products </button>
    </div>
    );
}

onClick(ev) {
  console.log("Sending a GET API Call !!!");
  axios.get('/products')
  .then(res => {
          console.log(res);
  }).then(response => {
      console.log(JSON.stringify(response));
  })    
}

}

export default App;
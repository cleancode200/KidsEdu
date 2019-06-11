import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  fun(){
    fetch('http://localhost:8000/api/myapp/Parent/', {
      method: 'get'
    }).then(()=>{
      console.log("sssssssssss")
    })
  }



  render(){
    return (
      <div className="App">
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     
        <button  onClick={this.fun.bind(this)}>aaaaaaaaaaaaaaaaaaaaaaaaa</button>
      </div>
    );
  }
}

export default App;

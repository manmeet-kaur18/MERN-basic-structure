import React, { Component } from 'react';
import './App.css';
// import Form from './components/form';
// import Formhook from './components/formhook'

class App extends Component {
  render() {
    return (
      <div className="App">
       Welcome visitor
       <br/>
       <button onClick={()=>{
         location.href="/signup"
       }}>Sign up</button>
       <br/>
       <button onClick={()=>{
         location.href="/signin"
       }}>Sign In</button>
        <br/>
       <button onClick={()=>{
         location.href="/getnames"
       }}>Get names</button>
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router } from '@reach/router';
import firebase from './Firebase';

import logo from './logo.svg';
import './App.css';


import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from "./Login";
import Meetings from "./Meetings";
import Register from "./Register";

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && (
          <Welcome user = { this.state.user }/>
        )}
        <Router>
          <Home path="/" user = { this.state.user }/>
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />
        </Router>
        
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <p  className="navbar-brand">Move Info</p>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="jumbotron">
            <h3 className="text-center">Search for Any Movie</h3>
            <form action="" id="searchform">
              <input type="text" className="form-control" id="searchText" placeholder="Search Movie"/>
            </form>
          </div>
        </div>
        <div className="container">
          <div id="movies" className="row"></div>
        </div>
      </div>
    );
  }
}

export default App;

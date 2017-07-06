import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './HomePage';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hello Northcoders!</h1>
        <Router>
          <div>
            <Link to="/">Home</Link>
              <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
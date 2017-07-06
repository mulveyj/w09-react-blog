import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './HomePage';
import './App.css';
import Post from './Post';
import '../node_modules/bulma/css/bulma.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1 className='title'>Hello Northcoders!</h1>
        <Router>
          <div>
            <Link to="/">Home</Link>
              <Route exact path="/" component={Home}/>
              <Route path="/posts/:id" component={Post}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
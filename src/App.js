import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './HomePage';
import Post from './Post';
import Author from './Author';
import NoMatch from './NoMatch';
import '../node_modules/bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1 className='title'>Hello Northcoders!</h1>
        <Router>
          <div>
            <Link to="/">Home</Link>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Home}/>
                <Route path="/posts/:id" component={Post}/>
                <Route path="/authors/:author" component={Author}/>
                <Route component={NoMatch}/>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
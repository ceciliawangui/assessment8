import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home.jsx';
import Posts from './components/Post.jsx';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

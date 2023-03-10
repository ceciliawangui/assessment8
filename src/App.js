import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home.jsx';
import Posts from './components/Post.jsx';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        
      </div>
    </Router>
  );
}

export default App;
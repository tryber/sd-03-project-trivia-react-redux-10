import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Questions from './Pages/Questions';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';
import Settings from './Pages/Settings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/questions" component={Questions} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './components/upload';
import Demo from './components/demo';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Upload} />
          <Route path='/demo' exact component={Demo} />
        </Switch>
      </Router>
    </>
  );
}
export default App
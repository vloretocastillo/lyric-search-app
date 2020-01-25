import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBarComponent/NavBar'
import Index from '../IndexComponent/Index'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

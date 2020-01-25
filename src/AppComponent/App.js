import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBarComponent/NavBar'
import Index from '../IndexComponent/Index'
import { Provider } from '../context'

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;

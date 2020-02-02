import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBarComponent/NavBar'
import Index from '../IndexComponent/Index'
import Lyrics from '../LyricsComponent/Lyrics'
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
          {/* <Route  path='/lyric-search-app' component={Index} /> */}
          <Route exact path='/lyrics/track/:id' component={Lyrics} />

        </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

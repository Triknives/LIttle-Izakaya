import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import TapList from './components/TapList'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Switch>
    <Route exact path='/taplist' component={TapList} />
    <Route exact path='/home' component={Home} />
    </Switch>
    </div>
  );
}
export default App;

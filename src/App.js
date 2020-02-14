import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './components/TapList'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/taplist' component={TapList} />
    </Switch>
    </div>
  );
}
export default App;

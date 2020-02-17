import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeUpdateList from './components/HomeUpdateList'
import TapList from './components/TapList'
import DishesList from './components/DishesList'
import Header from './components/Header'
import Error404 from './components/Error404'
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomeUpdateList} />
      <Route exact path='/homeupdatelist' component={HomeUpdateList} />
    <Route exact path='/taplist' component={TapList} />
    <Route exact path='/disheslist' component={DishesList} />
    <Route component={Error404} />
    </Switch>
    </div>
  );
}
export default App;

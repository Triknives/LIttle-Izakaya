import React from 'react';
import TapList from './components/TapList';
import DishesList from './components/DishesList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import HomeUpdateList from './components/HomeUpdateList';
import HomeUpdateControl from './components/HomeUpdateControl';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterUpdateList: []
    };
      this.handleAddingNewUpdateToList = this.handleAddingNewUpdateToList.bind(this);
  }
  handleAddingNewUpdateToList(newUpdate){
    var newMasterUpdateList = this.state.masterUpdateList.slice();
    newMasterUpdateList.push(newUpdate);
    this.setState({masterUpdateList: newMasterUpdateList});
  }
  render(){
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' render={()=><HomeUpdateList homeUpdateList={this.state.masterUpdateList} />} />
      <Route path='/updates' render={()=><HomeUpdateControl onNewUpdateCreation={this.handleAddingNewUpdateToList} />} />
      <Route exact path='/homeupdatelist' component={HomeUpdateList} />
      <Route exact path='/taplist' component={TapList} />
      <Route exact path='/disheslist' component={DishesList} />
      <Route component={Error404} />
      </Switch>
      <Footer/>
      </div>
    );
  }
}
export default App;

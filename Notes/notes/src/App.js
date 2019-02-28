import React, { Component } from 'react';
import './App.css';
import SideView from './Components/SideView';
import Notes from './Components/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideView />
        <Notes />
      </div>
    );
  }
}

export default App;

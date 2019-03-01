import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import SideView from './Components/SideView';
//import Notes from './Components/Notes';
import PreviewNotes from '';
import CreateNotes from '';
import ViewNotes from '';
import DeleteNotes from '';
import EditNotes from '';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideView />

        <Route
          path={`/create`}
          render={props =>
            <CreateNotes {...props} />
          }
        />
        <Route
          path='/'
          exact
          render={props =>
            <PreviewNotes {...props} />
          }
        />

        <Route
          exact path="/note/:id"
          render={props =>
            <ViewNotes {...props} />}
        />

        <Route
          path={`/note/delete/:id`}
          render={props =>
            <DeleteNotes {...props} />}
        />
        <Route
          path={`/note/edit/:id`}
          render={props =>
            <EditNotes {...props} />}
        />
      </div>
    );
  }
}

export default App;

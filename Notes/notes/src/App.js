import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import SideView from './Components/SideView';
//import Notes from './Components/Notes';
import PreviewNotes from './Components/PreviewNotes';
import CreateNotes from './Components/CreateNotes';
import ViewNotes from './Components/ViewNotes';
import DeleteNotes from './Components/DeleteNotes';
import EditNotes from './Components/EditNotes';

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

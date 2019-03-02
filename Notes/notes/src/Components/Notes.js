import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';

import { Route } from 'react-router-dom';
import PreviewNotes from './Components/';
import CreateNotes from './Components/CreateNotes';
import ViewNotes from './Components/';
import DeleteNotes from './Components/DeleteNotes';
import EditNotes from './Components/Editnotes';
class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            loading: true,
        }
    }

    componentDidMount() {
        Axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({
                    notes: response.data,
                    loading: false,
                });
            })
            .catch(err => console.log(err));
    }

    addNoteOnServer = newNote => {
        this.setState({ notes: newNote });
    }


    render() {
        return (
            <div>
                <Route
                    path="/create"
                    render={props =>
                        <CreateNotes {...props} notes={this.state.notes} addNoteOnServer={this.addNoteOnServer} />}
                />

                <Route
                    exact path="/"
                    render={props =>
                        <PreviewNotes {...props} notes={this.state.notes} />}
                />

                <Route
                    path="/note/:id"
                    render={props =>
                        <ViewNotes {...props} notes={this.state.notes} />}
                />

                <Route
                    path="/note/delete/:id"
                    render={props =>
                        <DeleteNotes {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
                />

                <Route
                    path="/note/edit/:id"
                    render={props =>
                        <EditNotes />}
                />

            </div>

        );
    }
}

export default Notes;
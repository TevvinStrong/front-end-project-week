import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            loading: true,
        }
    }

    componentDidMount() {
        Axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => this.setState({ notes: res.data, loading: false, }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="notesContainer">
                <h2>Your Notes: </h2>
                <div className="notes">
                    {this.state.notes.map((note) => (
                        <div className="notes">
                            <h3>{note.title}</h3>
                            <p>{note.textBody}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Notes;
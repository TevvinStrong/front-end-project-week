import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PreviewNotes extends Component {
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
                console.log(response)
                this.setState({
                    notes: response.data,
                    loading: false,
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="notesContainer">
                <h2>Your Notes: </h2>
                <div className="notes">
                    {this.state.notes.map((note) => (
                        <Link key={note._id} className="note" to={`/note/${note._id}`}>
                            <h3>{note.title}</h3>
                            <p>{note.textBody}</p>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}


export default PreviewNotes;
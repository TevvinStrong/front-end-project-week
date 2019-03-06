import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';

import { Link } from 'react-router-dom';

class ViewNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            loading: true
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }
    fetchNote = id => {
        Axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({
                    note: response.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    render() {
        return (
            <div className="notesContainer">
                <div className="linkContainer">
                    <Link className="button" to={`/note/edit/${this.props.match.params.id}`}>Edit</Link>
                    <Link className="button" to={`/note/delete/${this.props.match.params.id}`}>Delete</Link>
                </div>
                <div className="notes">
                    <h3>{this.state.note.title}</h3>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        )
    }
}


export default ViewNotes;
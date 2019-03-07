import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class DeleteNotes extends Component {
    DeleteNotes = (e) => {
        e.preventDefault();
        Axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
            .then(Response => {
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
        this.setState({
            title: '',
            textBody: '',
        });
    }
    render() {
        return (
            <div className="deleteContainer">
                <div className="confirm">
                    <div className="confermMessage">Are you sure want to delete this?</div>
                    <div className="delete">
                        <Link to={`/`} onClick={this.DeleteNotes}>
                            <div className="ContainerDelete">Delete</div>
                        </Link>
                        <Link to={`/notes/${this.props.match.params.id}`}>
                            <div className="noContainer">No</div>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}


export default DeleteNotes;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
import OneNoteItem from './oneNoteItem'
import { FetchNotes, ClearNotes, AddNote, RemoveNote, EditNote } from '../../action/notesAction';
import * as STYLED from './style'

class NotesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            userID: '',
            text: '',
            loaded: false
        }
    }
    componentDidMount() {
        const userID = this.props.authUser.userID
        this.setState({ userID: userID })
        this.props.firebase.allNotesUser(userID).once('value', snapshot => {
            const notesObject = snapshot.val();
            if (notesObject) {
                // convert notes list from snapshot
                const notesList = Object.keys(notesObject).map(key => ({
                    ...notesObject[key],
                    noteKey: key,
                }));
                // Redux Fetch
                this.props.FetchNotes(notesList)
            } else {
                this.props.FetchNotes([])
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes !== this.props.notes) {
            // Redux props changed
            this.setState({ loaded: true, notes: this.props.notes });
        }
    }

    onChangeText = event => {
        //On changed Text
        this.setState({ text: event.target.value });
    };
    onCreateNote = (event) => {
        // Create new note and add in Redux
        event.preventDefault();
        if (this.state.text !== '') {
            const keyID = this.props.firebase.allNotesUser(this.state.userID).push({
                text: this.state.text,
                createdDate: this.props.firebase.serverValue.TIMESTAMP,
            });
            this.props.AddNote({ text: this.state.text, createdDate: Date.now(), noteKey: keyID.key })
            this.setState({ text: '' });
        }
    };

    removeNotes = (noteID, numbID) => {
        // Remove one note in Redux
        const uid = this.state.userID
        this.props.firebase.oneNoteUser(uid, noteID).remove();
        this.props.RemoveNote(numbID)
    };

    editNotes = (newText, noteID, restNotes, numbID) => {
        // Edit note  in Redux
        const uid = this.state.userID
        const updatedNotes = this.state.notes.map((note, numb) => {
            if (numb === numbID) {
                return { ...note, text: newText, editedDate: Date.now() }
            } else {
                return note
            }
        })
        this.props.EditNote(updatedNotes)
        delete restNotes.noteKey
        this.props.firebase.oneNoteUser(uid, noteID).set({
            ...restNotes,
            text: newText,
            editedDate: this.props.firebase.serverValue.TIMESTAMP,
        });
    };
    componentWillUnmount() {
        // Clear Notes unmounted
        this.props.ClearNotes()
        this.props.firebase.allNotesUser(this.state.userID).off()
    }
    onSignOut = () => {
        // Delay for page transition
        const mainDom = document.getElementById("notes")
        mainDom.classList.remove("fade-enter-done")
        mainDom.classList.remove("fade-enter")
        mainDom.classList.add("fade-exit")
        mainDom.classList.add("fade-exit-active")
        setTimeout(() => {
            this.props.firebase.doSignOut()
        }, 1000)
    }

    render() {
        const { loaded, notes, text } = this.state
        return (
            <STYLED.FullMainPage className="page" id="notes">
                <STYLED.MainTitle>Notes List With Firebase</STYLED.MainTitle>
                {loaded ?
                    <>
                        <STYLED.StyledForm onSubmit={this.onCreateNote}>
                            <STYLED.StyledInput type='text' placeholder='Add Notes' value={text} onChange={this.onChangeText} />
                            <STYLED.ButtonSpan>
                                <STYLED.SignOutButtonStyle type="button" onClick={this.onSignOut}>
                                    Sign out
                                </STYLED.SignOutButtonStyle>
                                <STYLED.SubmitButton disabled={text === ''} type="submit">Submit Note</STYLED.SubmitButton>
                            </STYLED.ButtonSpan>
                        </STYLED.StyledForm>
                        {notes.length > 0 ?
                            <STYLED.NotesListUL>
                                {notes.map((note, index) => (
                                    <OneNoteItem note={note} index={index} key={index} removeNotes={this.removeNotes} editNotes={this.editNotes} />
                                ))}
                            </STYLED.NotesListUL>
                            : <STYLED.NoNotesText>No notes...</STYLED.NoNotesText>}
                    </>
                    : <STYLED.LoadingScreen />}
            </STYLED.FullMainPage>
        )
    }
}
const mapStateToProps = state => ({
    notes: state.notesRedux
})
export default connect(mapStateToProps, { FetchNotes, ClearNotes, AddNote, RemoveNote, EditNote })(withFirebase(NotesPage))

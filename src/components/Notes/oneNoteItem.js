import React, { Component } from 'react'
import * as STYLED from './style'
class OneNoteItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editText: '',
            showEdit: false,
        }
    }

    toggleEdit = () => {
        // toggle Edit mode
        const bool = !this.state.showEdit
        this.setState({ showEdit: bool, editText: this.props.note.text })
    }
    onChangeEdit = e => {
        //On change Edit
        this.setState({ editText: e.target.value })
    }
    onSubmitEdit = e => {
        // Submit Edit
        e.preventDefault();
        const noteKey = this.props.note.noteKey
        const editedText = this.state.editText
        this.setState({ showEdit: false })
        this.props.editNotes(editedText, noteKey, this.props.note, this.props.index)
    }
    onRemove = e => {
        // Remove Edit
        e.preventDefault();
        const noteKey = this.props.note.noteKey
        this.props.removeNotes(noteKey, this.props.index)
    }
    render() {
        const { note } = this.props
        const { showEdit, editText } = this.state
        return (
            <STYLED.ListItem>
                <STYLED.ListItemDelteButton onClick={this.onRemove}><STYLED.DeleteStyle /></STYLED.ListItemDelteButton>
                {showEdit ? <STYLED.ListItemForm onSubmit={this.onSubmitEdit}>
                    <STYLED.ListItemInput type="text" value={editText} onChange={this.onChangeEdit} />
                    <STYLED.ListItemSubmitButton disabled={editText === ""} type="submit">Submit Edit</STYLED.ListItemSubmitButton>
                </STYLED.ListItemForm> : null}
                {!showEdit ? <STYLED.ListItemText>{note.text}</STYLED.ListItemText> : null}
                <STYLED.ListItemButtonSpan>
                    <STYLED.ListItemButton onClick={this.toggleEdit}>Toggle Edit</STYLED.ListItemButton>
                </STYLED.ListItemButtonSpan>
            </STYLED.ListItem>
        )
    }
}
export default OneNoteItem

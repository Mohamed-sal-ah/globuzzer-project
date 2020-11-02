import { Add_Notes, Clear_Notes, Edit_Notes, Fetch_Notes, Remove_Notes } from './type'

export const FetchNotes = data => dispatch => {
    dispatch({
        type: Fetch_Notes,
        payload: data
    })
}

export const AddNote = data => dispatch => {
    dispatch({
        type: Add_Notes,
        payload: data
    })
}

export const RemoveNote = data => dispatch => {
    dispatch({
        type: Remove_Notes,
        payload: data
    })
}
export const EditNote = data => dispatch => {
    dispatch({
        type: Edit_Notes,
        payload: data
    })
}


export const ClearNotes = () => dispatch => {
    dispatch({
        type: Clear_Notes,
        payload: null
    })
}
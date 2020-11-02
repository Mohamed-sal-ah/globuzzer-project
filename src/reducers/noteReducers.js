import { Fetch_Notes, Clear_Notes, Add_Notes, Remove_Notes, Edit_Notes } from '../action/type'
// Fetch menue reducer
const initialState = []

export default function notesReducers(state = initialState, action) {
    switch (action.type) {
        case Fetch_Notes:
            // Fetch all Notes
            return [...state, ...action.payload];
        case Add_Notes:
            // Add note
            return [...state, action.payload]
        case Remove_Notes:
            // Remove note
            state.splice(action.payload, 1)
            return [...state]
        case Edit_Notes:
            // Edit note
            state = action.payload
            return state
        case Clear_Notes:
            // Clear note
            return []
        default:
            return state;
    }

}
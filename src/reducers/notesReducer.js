import { types } from "../reducerTypes/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        default:
            return state;
    }
}
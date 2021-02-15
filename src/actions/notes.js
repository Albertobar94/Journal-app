import { db } from "../firebase/firebaseConfig";
import { types } from "../reducerTypes/types";
import { loadNotes } from "../utils/loadNotes";

export const startNewNote = () => {
  return async( dispatch, getState ) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: 'hoy es una gran dia',
      body: 'claro que si bro ',
      date: new Date().getTime()
    }

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

    dispatch( activeNote( doc.id, newNote ));
  }
};

export const activeNote = ( id, note ) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const setNote = ( notes ) => ({
  type: types.notesLoad,
  payload: notes
});

export const startLoadingNotes = ( uid ) => {
  return async( dispatch ) => {
    const notes = await loadNotes( uid )
    // debe llamarse SetNotes
    dispatch( setNote( notes ) )
  }
}
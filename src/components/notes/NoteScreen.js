import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from "../../hooks/useForm";
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes)
    const [ formValues, handleInputChange, resetState ] = useForm(note)
    const { body, title, tittle } = formValues;
    const activeId = useRef( note.id )
    useEffect(() => {
        if( note.id !== activeId.current ){
            resetState(note)
            activeId.current  = note.id
        }
    }, [note, resetState]);
    useEffect(() => {
        dispatch( activeNote( formValues.id, { ...formValues } ) )
    }, [formValues, dispatch])
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    name={`${ title ? 'title' : 'tittle'}`}
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    value={ title || tittle }
                    onChange={ handleInputChange }
                />
                <textarea 
                    name="body" 
                    id="" 
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange }
                >

                </textarea>
                {   note.url &&
                    <div className="notes__image">
                        <img 
                            src={`${note.url}`} 
                            alt="mamasita"

                        />
                    </div>
                }
            </div>
        </div>
    )
}

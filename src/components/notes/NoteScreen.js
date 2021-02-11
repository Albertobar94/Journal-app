import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea 
                    name="" 
                    id="" 
                    className="notes__textarea"
                >

                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://images.unsplash.com/photo-1555233707-877052f6c928?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" 
                        alt="mamasita"

                    />
                </div>
            </div>
        </div>
    )
}

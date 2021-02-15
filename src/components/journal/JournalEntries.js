import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const { notes } = useSelector(state => state.notes)

    return (
        <div className="journal__entries">
            {
                notes.map( note => (
                    <JournalEntry 
                        key={ note.id } 
                        url={ 'https://images.unsplash.com/photo-1555233707-877052f6c928?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80' }
                        { ...note}

                    />
                ))
            }
        </div>
    )
}

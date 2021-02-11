import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={ {
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1555233707-877052f6c928?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80)'
                 } }
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from "react-router-dom"

// import EntryForm from './EntryForm'


export default props => (
    <>
        <h2 className='header'>Happy Hour List</h2>
        <ul>
            {props.entrys.map(entry => <EntryItem key={entry.id} entry={entry} />)}
        </ul>
        {/* <EntryForm onSubmit={props.onSubmit} /> */}
    </>
)

const EntryItem = props => (
    <li>
        <Link to={`/${props.entry.id}`}>
            <p>
                {props.entry.title}
            </p>
        </Link>
    </li>
)

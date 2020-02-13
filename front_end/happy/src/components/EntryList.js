import React from 'react'
import { Link } from "react-router-dom"

import EntryForm from './EntryForm'


export default props => (
    <>
        <h2 className='header'>Happy Hour List</h2>
        <ul>
            {props.entrys.map(entry => <EntryItem key={entry.id} entry={entry} />)}
            <li>HAPPPY HOUR LIST</li>
        </ul>
        <EntryForm onSubmit={props.onSubmit} />
    </>
)

const EntryItem = props => (
    <li>
        <Link to={`/${props.entry.id}`}>
            <img>{props.entry.image}</img>
            <p>
                {props.entry.title}
            </p>
        </Link>
    </li>
)
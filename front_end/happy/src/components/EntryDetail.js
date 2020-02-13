import React from 'react'
import { Link } from "react-router-dom"
import EntryComment from './EntryComment'


export default props => (
    <>
    <h2 className='header'>Happy Hour List</h2>
    <ul>
        {props.entrys.map(entry => <EntryItem key={entry.id} entry={entry} />)}
        <li>HAPPPY HOUR LIST</li>
    </ul>
    
</>
)

const EntryItem = props => (
<li>
    <Link to={`/${props.entry.id}`}>
        <p>
            {props.entry.title}
        </p>
        <p>
            {props.entry.menu}
        </p>
        <p>
            {props.entry.menu}
        </p>
    </Link>
</li>
)

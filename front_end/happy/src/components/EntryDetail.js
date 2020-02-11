import React from 'react'
import { Link } from "react-router-dom"
import EntryComment from './EntryComment'


export default props => (
    <>
        <Link to="/"><p>Happy Hour List</p></Link>
        <button onClick={() => props.onDelete(props.entry.id)}>delete</button>
        <EntryComment onSubmit={props.onSubmit} entry={props.entry} />
    </>
)
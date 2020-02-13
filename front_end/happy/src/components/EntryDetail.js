import React from 'react'
import { Link } from "react-router-dom"
import EntryComment from './EntryComment'


export default props => (
    <>
        <Link to="/"><p>Happy Hour List</p></Link>
        <button className='deleteButton' onClick={() => props.onDelete(props.entry.id)}>delete</button>
        <p entry={props.entry} />
        {/* <EntryComment onSubmit={props.onSubmit} entry={props.entry} /> */}
    </>
)
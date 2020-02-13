import React from 'react'
import { Link } from "react-router-dom"
import EntryForm from './EntryForm'


export default props => (
    <>
        <Link to="/"><p>Happy Hour List</p></Link>
        <button onClick={() => props.onDelete(props.entry.id)}>delete</button>
        <EntryForm onSubmit={props.onSubmit} snack={props.entry} />
    </>
)

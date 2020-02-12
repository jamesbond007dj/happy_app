import React from 'react'
import { Link } from "react-router-dom"
import EntryComment from './EntryComment'


export default props => (
    <>
        <Link to="/"><p>Happy Hour List</p></Link>
        <ul>
                <li>Name: {props.entry.title}</li>
                <li>{props.entry.description}</li>
                <li>Menu: {props.entry.menu}</li>
                <li>Location: {props.entry.address}</li>
        </ul>
        <button onClick={() => props.onDelete(props.entry.id)}>delete</button>
        <EntryComment onSubmit={props.onSubmit} entry={props.entry} />
    </>
)
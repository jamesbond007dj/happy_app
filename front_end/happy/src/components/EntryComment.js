import React from 'react'
import { Link } from "react-router-dom"
import EntryCommentForm from './EntryCommentForm'




export default props => (
    <>
        <Link to="/"></Link>
        <EntryCommentForm onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

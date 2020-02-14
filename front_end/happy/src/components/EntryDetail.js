import React from 'react'
import { Link } from "react-router-dom"
import EntryForm from './EntryForm'
import EntryComment from './EntryCommentForm'


export default props => (
    <>
        {/* <Link to="/"><p>Go Home </p></Link> */}
        <EntryForm onSubmit={props.onSubmit} entry={props.entry} />
        <EntryComment onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

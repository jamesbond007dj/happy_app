import React from 'react'
import { Link } from "react-router-dom"
import EntryForm from './EntryForm'


export default props => (
    <>
        {/* <Link to="/"><p>Go Home </p></Link> */}
        <EntryForm onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

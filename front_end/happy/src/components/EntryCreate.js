import React from 'react'
import { Link } from "react-router-dom"
import EntryCreateForm from './EntryCreateForm'




export default props => (
    <>
        {/* <Link to="/"><p>Go Home </p></Link> */}
        <EntryCreateForm onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

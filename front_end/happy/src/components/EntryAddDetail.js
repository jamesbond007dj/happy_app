import React from 'react'
import { Link } from "react-router-dom"
import EntryAddForm from './EntryAddForm'


export default props => (
    <>
        <Link to="/"><p>Go Home </p></Link>
        <EntryAddForm onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

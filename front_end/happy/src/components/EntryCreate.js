import React from 'react'
import { Link } from "react-router-dom"
import EntryCreateForm from './EntryCreateForm'




export default props => (
    <>
        {/* <Link to="/"></Link> */}
        <EntryCreateForm onSubmit={props.onSubmit} entry={props.entry} />
    </>
)

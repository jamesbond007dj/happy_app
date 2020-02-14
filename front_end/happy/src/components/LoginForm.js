import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import EntryCreate from './EntryCreate'
import EntryCreateForm from './EntryCreateForm'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";





const url = 'http://206.189.212.188:8000/api/';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
          
        }
        this.obtainTokens = this.obtainTokens.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        
    }

    changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    async obtainTokens(event) {

        event.preventDefault();

        this.props.onSubmit({access:'', refresh:''});

    }


    render() {
        return (  
            <form onSubmit={this.obtainTokens}>
                <input name="username" type="text" value={this.state.username} placeholder="username" onChange={this.changeHandler}/>
                <input name="password" type="password" value={this.state.password} placeholder="password" onChange={this.changeHandler}/>
            <button>ok</button>
        </form>
                     
    )}

}




export default LoginForm;


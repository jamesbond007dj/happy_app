import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import EntryCreate from './EntryCreate'

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
            redirectToForm: false,
        }
        this.obtainTokens = this.obtainTokens.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.routeChangeTwo = this.routeChangeTwo.bind(this);
    }

    changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    async obtainTokens(event) {

        event.preventDefault();

        try {
            const response = await axios.post(url + 'token/', {
                username: this.state.username,
                password: this.state.password,
            });

            this.props.onSuccess(response.data);

        } catch (error) {
            console.error('Unexpected Error Occured!!!', error);
        }


    }

    routeChangeTwo() {
        
        this.setState({
            redirectToForm: true,
        })

    }

    render() {
        return (            
        <Router>

            <div className="App">

                <Switch>

                    <Route exact path="/login">
                        <form onSubmit={this.obtainTokens}>
                            <input name="username" type="text" value={this.state.username} placeholder="username" onChange={this.changeHandler}/>
                            <input name="password" type="password" value={this.state.password} placeholder="password" onChange={this.changeHandler}/>
                            <button onClick={this.routeChangeTwo}>ok</button>
                        </form>
                        {this.state.redirectToForm ? <Redirect to="/form" /> : 
                        <EntryCreate routeChangeTwo={this.routeChangeTwo} />
                    }
                    </Route>
    
                 
                       

        

                </Switch>

            </div> 
        </Router>)
    }

}




export default LoginForm;


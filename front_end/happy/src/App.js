import React from 'react';
import axios from 'axios';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink,

} from "react-router-dom";

import LoginForm from './components/LoginForm';
import EntryList from './components/EntryList';
import EntryDetail from './components/EntryDetail';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, } from 'reactstrap';
import EntryCreate from './components/EntryCreate';
import About from './About'
import EntryCreateForm from './components/EntryCreateForm';
import EntryComment from './components/EntryComment';
// import EntryAddDForm from './components/EntryAddForm';

const url = 'http://206.189.212.188:8000/api/';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            refreshToken: '',
            entrys: [],
            redirectToLogin: false,
            redirectHome: false,
            redirectToEntryCreate: false,
            // redirectToAdd: false,

        }
        this.createHandler = this.createHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.createEntryHandler = this.createEntryHandler.bind(this);
        this.renderEntryDetail = this.renderEntryDetail.bind(this);
        this.renderEntryCreateForm = this.renderEntryCreateForm.bind(this);
        // this.routeChange = this.routeChange.bind(this);
        // this.routeChangeTwo = this.routeChangeTwo.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    async componentDidMount() {

        try {
            const response = await axios.get(url + 'v1/current');

            console.log(response.data);

            this.setState({
                entrys: response.data
            });
        }
        catch (error) {
            console.error(error)
        }



    }

    async loginHandler({ access, refresh }) {
        this.setState({
            accessToken: access,
            refreshToken: refresh,
            redirectToEntryCreate: true,
            redirectHome: false,

        })
    }

    async DirectHandler({ access, refresh }) {
        this.setState({
            accessToken: access,
            refreshToken: refresh,
        });

        try {
            const headers = {
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`
                }
            }
            const response = await axios.get(url + 'v1/current');

            console.log(response.data);

            this.setState({
                entrys: response.data
            });

        } catch (error) {
            console.error('Token Error');
        }

    }

    async createHandler(data) {

        // const headers = {
        //     headers: {
        //         Authorization: `Bearer ${this.state.accessToken}`
        //     }
        // }

        const response = await axios.post(url + 'v1/', data);

        console.log(response.data);

        this.setState({
            entrys: this.state.entrys.concat([response.data])
        })


    }

    async updateHandler(data) {

        const headers = {
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`
            }
        }

        const path = `${url}v1/${data.id}`;

        console.log('path', path);
        const response = await axios.put(path, data);

        console.log(response.data);

        this.setState({
            entrys: this.state.entrys.map(entry => {
                if (entry.id === data.id) {
                    return data;
                } else {
                    return entry;
                }
            })
        })

    }

    async deleteHandler(id) {

        const headers = {
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`
            }
        }

        const path = `${url}v1/${id}`;

        console.log('path', path);

        const response = await axios.delete(path);

        console.log(response.data);

        this.setState({
            entrys: this.state.entrys.filter(entry => entry.id !== id)
        })

    }

    renderEntryDetail(props) {

        // if (!this.state.accessToken) {
        //     return <Redirect to="/" />
        // }

        const entryId = parseInt(props.match.params.id);

        const entry = this.state.entrys && this.state.entrys.find(entry => entry.id === entryId);

        if (entry) {
            return (
                <>
                    <EntryDetail entry={entry} onSubmit={this.updateHandler}  />
                </>
            )} else {
            return <Redirect to="/" />
        }
    }

    createEntryHandler(entry) {

        entry.id = Math.floor(Math.random() * 1000); // DANGER: don't do this in production, just getting to temporarily work until we get an api

        const entrys = [...this.state.entrys, entry]// same as this.state.things.concat(thing) but more common in react

        this.setState({
            entrys: entrys, // see alternate style below
            redirectToEntryCreate: false,
            redirectHome: true
        })

      }

    renderEntryCreateForm() {

        if(this.state.redirectHome) {
            return <Redirect to="/" />
        } else {
            return <EntryCreateForm onSubmit={this.createEntryHandler} />
        }
    }

    render() {
        return (
            <Router>

                <div className="App">
                    <Nav />
                    <Switch>


                        <Route exact path="/about" >
                            <About />
                        </Route>
                        <Route exact path="/login" >

                            {this.state.redirectToEntryCreate ? <Redirect to="/form" /> :
                            <LoginForm onSubmit={this.loginHandler} />
                        }

                        </Route>
                        <Route exact path="/form" render={this.renderEntryCreateForm}  />

                        <Route exact path="/">
                            <>
                                <EntryCounter entrys={this.state.entrys} />
                            </>
                            <HomePage entrys={this.state.entrys} createHandler={this.createHandler} routeChange={this.routeChange} />


                        </Route>
                        <Route path="/:id" render={this.renderEntryDetail} />



                    </Switch>

                </div>
            </Router>
        );
    }
}



function HomePage(props) {
    return (
    <div>

        <EntryList entrys={props.entrys} onSubmit={props.createHandler} />

    </div>
    )
}

function EntryCounter({ entrys }) {
    return <h2 className="header">NOW YOU CAN CATCH {entrys.length} HAPPY HOURS</h2>
  }

function Nav(props) {
return (
    <nav>
        <ul className='navbarUl'>
            <li className='navbar'><NavLink to="/">Home</NavLink></li>
            <li className='navbar'><NavLink to="/about">About Us</NavLink></li>
            <li className='navbar'><NavLink to="/login">Login</NavLink></li>

        </ul>
    </nav>
)
}

export default App;


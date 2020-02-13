import React from 'react';
import axios from 'axios';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import LoginForm from './components/LoginForm';
import EntryList from './components/EntryList';
import EntryDetail from './components/EntryDetail';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';



const url = 'http://206.189.212.188:8000/api/';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            refreshToken:'',
            entrys: [],
        }
        this.loginHandler = this.loginHandler.bind(this);
        this.createHandler = this.createHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.renderEntryDetail = this.renderEntryDetail.bind(this);
        // this.renderEntryForum = this.renderEntryForum.bind(this);
        // this.renderLoginForum = this.renderLoginForum.bind(this);
    }
    
    async componentDidMount() {

        try {
            const response = await axios.get(url + 'v1/');

            console.log(response.data);
    
            this.setState({
                entrys: response.data
            });
        }
        catch (error){
            console.error(error)
        }



    }

    async loginHandler({access, refresh}) {
        this.setState({
            accessToken : access,
            refreshToken : refresh,
        });

        try {
            const headers = {
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`
                }
            }
            const response = await axios.get(url + 'v1/');

            console.log(response.data);

            this.setState({
                entrys: response.data
            });

        } catch (error) {
            console.error('Token Error');
        }

    }

    async DirectHandler({access, refresh}) {
        this.setState({
            accessToken : access,
            refreshToken : refresh,
        });

        try {
            const headers = {
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`
                }
            }
            const response = await axios.get(url + 'v1/');

            console.log(response.data);

            this.setState({
                entrys: response.data
            });

        } catch (error) {
            console.error('Token Error');
        }

    }

    async createHandler(data) {

        const headers = {
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`
            }
        }

        const response = await axios.post(url + 'v1/', data);

        console.log(response.data);

        this.setState({
            entrys: this.state.entrys.concat(response.data)
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

    // renderEntryForm(props) {

    //     // if (!this.state.accessToken) {
    //     //     return <Redirect to="/" />
    //     // }

    //     const entryId = parseInt(props.match.params.id);

    //     const entry = this.state.entrys && this.state.entrys.find(entry => entry.id === entryId);

    //     if (entry) {
    //         return <this.EntryForm entry={entry} onSubmit={this.updateHandler} onDelete={this.deleteHandler} />
    //     } else {
    //         return <Redirect to="/" />
    //     }
    // }


    // renderLoginForm(props) {

    //     // if (!this.state.accessToken) {
    //     //     return <Redirect to="/" />
    //     // }

    //     const entryId = parseInt(props.match.params.id);

    //     const entry = this.state.entrys && this.state.entrys.find(entry => entry.id === entryId);

    //     if (entry) {
    //         return <this.LoginForm entry={entry} onSubmit={this.updateHandler} onDelete={this.deleteHandler} />
    //     } else {
    //         return <Redirect to="/" />
    //     }
    // }

    renderEntryDetail(props) {

        // if (!this.state.accessToken) {
        //     return <Redirect to="/" />
        // }

        const entryId = parseInt(props.match.params.id);

        const entry = this.state.entrys && this.state.entrys.find(entry => entry.id === entryId);

        if (entry) {
            return <EntryDetail entry={entry} onSubmit={this.updateHandler} onDelete={this.deleteHandler} />
        } else {
            return <Redirect to="/" />
        }
    }
    render() {
        return (
            <Router>

            <div className="App">

                <Switch>

                    <Route exact path="/">

                        {/* {this.state.entrys ?
                            <EntryList entrys={this.state.entrys} onSubmit={this.createHandler} /> :
                            <LoginForm onSuccess={this.loginHandler} />} */}
                         <EntryList entrys={this.state.entrys} onSubmit={this.createHandler} /> :
                         {/* <LoginForm onSuccess={this.loginHandler} /> : */}

                        <Row>
                            <Col xs="6">                      
                                <Button color="primary" className="px-4" onClick={this.routeChange}>
                                  Login
                                </Button>
                            </Col>
                            <Col xs="6" className="text-right">
                                <Button color="link" className="px-0">Forgot password?</Button>
                            </Col>
                        </Row>

                    </Route>

                    <Route path="/:id" render={this.renderEntryDetail} />

                </Switch>

            </div>
            </Router>
        );
    }
}

export default App;
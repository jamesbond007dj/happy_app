import React from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import LoginForm from './components/LoginForm';
import EntryList from './components/EntryList';
import EntryDetail from './components/EntryDetail';


const url = 'http://165.227.18.226:8000/api/';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            refreshToken:'',
            entrys: null,
        }
        this.loginHandler = this.loginHandler.bind(this);
        this.createHandler = this.createHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.renderEntryDetail = this.renderEntryDetail.bind(this);
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
            const response = await axios.get(url + 'v1/', headers);

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

        const response = await axios.post(url + 'v1/', data, headers);

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
        const response = await axios.put(path, data, headers);

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

        const response = await axios.delete(path, headers);

        console.log(response.data);

        this.setState({
            entrys: this.state.entrys.filter(entry => entry.id !== id)
        })

    }

    renderEntryDetail(props) {

        if (!this.state.accessToken) {
            return <Redirect to="/" />
        }

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

                        {this.state.entrys ?
                            <EntryList entrys={this.state.entrys} onSubmit={this.createHandler} /> :
                            <LoginForm onSuccess={this.loginHandler} />}

                    </Route>

                    <Route path="/:id" render={this.renderEntryDetail} />

                </Switch>

            </div>
            </Router>
        );
    }
}

export default App;
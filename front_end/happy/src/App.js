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

import EntryCreateForm from './components/EntryCreateForm';
import LoginForm from './components/LoginForm';
import EntryList from './components/EntryList';
import EntryDetail from './components/EntryDetail';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, } from 'reactstrap';
import EntryCreate from './components/EntryCreate';
import About from './About'
// import EntryAddDForm from './components/EntryAddForm';

const url = 'http://206.189.212.188:8000/api/';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            refreshToken: '',
            entrys: [],
            // redirectToLogin: false,
            // redirectToAdd: false,
        }
        this.loginHandler = this.loginHandler.bind(this);
        this.createHandler = this.createHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        // this.renderEntryCreate = this.renderEntryCreate.bind(this);
        this.renderEntryDetail = this.renderEntryDetail.bind(this);
        this.routeChange = this.routeChange.bind(this);
        this.routeChangeTwo = this.routeChangeTwo.bind(this);
        this.createEntryHandler = this.createEntryHandler.bind(this);
   
    }

    async componentDidMount() {

        try {
            const response = await axios.get(url + 'v1/');

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

    createEntryHandler(entry) {

        entry.id = Math.floor(Math.random() * 1000); // DANGER: don't do this in production, just getting to temporarily work until we get an api
    
        const entrys = [...this.state.entrys, entry]// same as this.state.things.concat(thing) but more common in react
    
        this.setState({
            entrys: entrys // see alternate style below
        })
      }

    routeChange() {
        
        this.setState({
            redirectToLogin: true,
        })

    }

    routeChangeTwo() {
        
        this.setState({
            redirectToAdd: true,
        })

    }   

    render() {
        return (
            <Router>

                <div className="App">
                    <Nav />
                    <Switch>
 
                        <Route exact path="/">
                            {this.state.redirectToLogin ? <Redirect to="/login" /> : 
                            <HomePage entrys={this.state.entrys} createHandler={this.createHandler} routeChange={this.routeChange} />
                        }
                        <>
                            <EntryCounter entrys={this.state.entrys} />
                        </>
                        </Route>
                        <Route path="/about" >
                            <About />
                        </Route>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/login">
                            {this.state.redirectToAdd ? <Redirect to="/forum" /> : 
                            <AddPage entrys={this.state.entrys} createHandler={this.createHandler} routeChangeTwo={this.routeChangeTwo} />
                        }
                        </Route>
                        <Route exact path="/form"  >
                            <EntryCreate onSubmitEntry={this.createEntryHandler} />
                        </Route>
                        <Route path="/:id" render={this.renderEntryDetail} />
                     
                

                    </Switch>

                </div> 
            </Router>
        );
    }
}

function LoginPage(props) {
    return (
        <div>
            <LoginForm />
  
        </div>
        )
}

function EntryAddPage(props) {
    const fakeEntry = {title : 'fake' }
    return (
        <div>
            <EntryCreate entry={fakeEntry}/>
  
        </div>
        )
}


function HomePage(props) {
    return (
    <div>

        <EntryList entrys={props.entrys} onSubmit={props.createHandler} />

        {/* <Row>}
            <Col xs="6">
                <Button color="primary" className="px-4" onClick={props.routeChange}>
                    Login
                </Button>
            </Col>
        </Row> */}

    </div>
    )
}

function AddPage(props) {
    return (
    <div>

        <EntryList entrys={props.entrys} onSubmit={props.createHandler} />

        <Row>
            <Col xs="6">
                <Button color="primary" className="px-4" onClick={props.routeChangeTwo}>
                    Login
                </Button>
            </Col>
        </Row>

    </div>
    )
}

function EntryCounter({ entrys }) {
    return <p># of Happy Hours : {entrys.length}</p>
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
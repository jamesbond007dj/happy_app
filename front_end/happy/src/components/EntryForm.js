import React, { Component } from 'react';

class EntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.entry.title,
            menu: props.entry.menu,
            times: props.entry.times,
            address: props.entry.address,
            description: props.entry.description,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static defaultProps = {
        entry: {
            title: '',
            menu: '',
            times: '',
            address:'',
            description: '',
        }
    }


    changeHandler(event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
        const data = {...this.state};
        this.props.onSubmit(data);
        this.setState({
            title: '',
            menu: '',
            times: '',
            address:'',
            description: '',
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
                <p>{this.state.menu}</p>
                <p>{this.state.times}</p>
                <p>{this.state.address}</p>
                <span>{this.state.description}</span>
            </>
        )
    }
}

export default EntryForm
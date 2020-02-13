import React, { Component } from 'react';


class EntryComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.entry.title,
            description: props.entry.description,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static defaultProps = {
        entry: {
            title: '',
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
        const data = { ...this.state };
        this.props.onSubmit(data);
        this.setState({
            title: '',
            description: ''
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

export default EntryComment
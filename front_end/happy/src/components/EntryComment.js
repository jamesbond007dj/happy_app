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
        const data = {...this.state};
        this.props.onSubmit(data);
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <h1>{this.state.title}</h1>
                    <span>{this.state.description}</span>
                    <fieldset>
                        <legend>
                            Post
                        </legend>
                        {/* <input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.changeHandler} /> */}
                        {/* <textarea name="description" placeholder="description" cols="30" rows="10" value={this.state.description} onChange={this.changeHandler}></textarea> */}
                        <button className='submitButton'>ok</button>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EntryComment
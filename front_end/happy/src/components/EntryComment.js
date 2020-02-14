import React, { Component } from 'react';


class EntryComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.entry.body,
            
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static defaultProps = {
        entry: {
            body: '',
        
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
            body: ''
        })
    }

    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <fieldset class="commentForm">
                    <legend>
                        PLEASE ADD YOUR COMMENT
                    </legend>
                    <textarea name="body" placeholder="Please add comment" cols="30" rows="10" value={this.state.body} onChange={this.changeHandler}></textarea>
                    <button className='submitButton'>ok</button>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EntryComment
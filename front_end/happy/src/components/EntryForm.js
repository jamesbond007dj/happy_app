import React, { Component } from 'react';

class EntryForm extends Component {

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
            comment: '',
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
            comment: ''
        })
    }

    render() {
        return (
            <>
            <div className='form'>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <legend>
                            ADD NEW HAPPY HOUR
                        </legend>
                        <input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.changeHandler} />
                        <textarea name="comment" placeholder="comment" cols="30" rows="10" value={this.state.description} onChange={this.changeHandler}></textarea>
                        <button>ok</button>
                    </fieldset>
                </form>
            </div>
            </>
        )
    }
}

export default EntryForm
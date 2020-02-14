import React, { Component } from 'react';

class EntryCreateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            menu: '',
            times: '',
            address: '',
            description: '',
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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
    }

    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <fieldset>
                    <legend>
                        CREATE YOUR HAPPY HOUR
                    </legend>
                    <input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.changeHandler} />
                    <input name="menu" type="text" placeholder="menu" value={this.state.menu} onChange={this.changeHandler} />
                    <input name="times" type="text" placeholder="times" value={this.state.times} onChange={this.changeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.changeHandler} />
                    <textarea name="description" placeholder="description" cols="30" rows="5" value={this.state.description} onChange={this.changeHandler}></textarea>
                    <button className='submitButton' type='submit'>Submit</button>
                </fieldset>
            </form>
        </>
        )
    }
}


export default EntryCreateForm

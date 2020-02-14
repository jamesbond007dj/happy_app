import React, { Component } from 'react';

class EntryCreateForm extends Component {

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
        
        // TURN BACK HERE FOR POST
        // const data = {...this.state};
        // this.props.onSubmit(data);
        // this.setState({
        //     title: '',
        //     menu: '',
        //     times: '',
        //     address:'',
        //     description: '',
        // })
    }

    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <fieldset>
                    <legend>
                        CREATE HAPPY HOUR
                    </legend>
                    <input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.changeHandler} />
                    <input name="menu" type="text" placeholder="menu" value={this.state.menu} onChange={this.changeHandler} />
                    <input name="times" type="text" placeholder="times" value={this.state.times} onChange={this.changeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.changeHandler} />
                    <textarea name="description" placeholder="description" cols="30" rows="10" value={this.state.description} onChange={this.changeHandler}></textarea>
                    <button className='submitButton'>ok</button>
                </fieldset>
            </form>
        </>
        )
    }
}


export default EntryCreateForm
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
            comments: props.entry.comments,
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
            comments: '',
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
            comments: '',
        })
    }

    render() {
        return (

            <>
                <ul className='testerr'>
                    <li className='title1'><h2>{this.state.title}</h2></li>
                    <li className='title1'><h2>Menu : {this.state.menu}</h2></li>
                    <li className='title1 times1'><h2>Happy Hours : {this.state.times}</h2></li>
                    <li className='title1'><h2>Address : {this.state.address}</h2></li>
                    <li className='title1'><h2>{this.state.description}</h2></li>
                    <li className='title1'><h2>{this.state.comments}</h2></li>
                </ul>

            </>
        )
    }
}

export default EntryForm
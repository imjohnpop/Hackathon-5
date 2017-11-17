import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            input_name: ''
        }
    }
    formSubmitted(event) {
        event.preventDefault();
        $.ajax({
            method: 'post',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks/create',
            data: {
                name: this.state.input_name,
            }
        }).done((data) => {
            this.props.taskWasAdded();
        })
    }
    nameChanged(event){
        this.setState({
            input_name: event.target.value
        })
    }
    render() {
        return (
            <div id="form" className="col-6 mx-auto">
                <form action="" onSubmit={(event) => this.formSubmitted(event)}>
                    <div className="form-group">
                        <label htmlFor="name">Add a new task!</label>
                        <input className="form-control" type="text" name="name" id="name"
                               placeholder="Add your to do task here..."
                               value={ this.state.input_name }
                               onChange={ (event) => this.nameChanged(event) }/>
                    </div>
                    <input type="submit" className="btn btn-dark" value="Submit"/>
                </form>
            </div>
        )
    }
}
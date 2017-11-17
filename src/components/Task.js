import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    taskLogged(event) {
        event.preventDefault();
        $.ajax({
            method: 'post',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs/create',
            data: {
                task_id: this.props.id,
                duration: 0
            }
        }).done((data) => {
            this.props.logAdd();
        })
    }

    render() {
        return (
            <div className="task card">
                <div className="card-body">
                    <h4 className="card-title">{ this.props.name }</h4>
                    <p className="card-text">Time spend: { this.props.total } minutes</p>
                    <button className="btn btn-dark" onClick={(event) => this.taskLogged(event)}><i className="fa fa-plus-square text-light" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Task extends React.Component {


    render() {
        return (
            <div className="task card">
                <div className="card-body">
                    <h4 className="card-title">To Do Task</h4>
                    <p className="card-text">Find a job.</p>
                    <button className="btn btn-dark"><i className="fa fa-plus-square text-light" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Log extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="log card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.task_id}</h4>
                    <p className="card-text">asdasdasd</p>
                </div>
            </div>
        )
    }
}
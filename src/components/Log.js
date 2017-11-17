import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Log extends React.Component {


    render() {
        return (
            <div className="log card">
                <div className="card-body">
                    <h4 className="card-title">Task In Progress</h4>
                    <p className="card-text">Do the work log app.</p>
                </div>
            </div>
        )
    }
}
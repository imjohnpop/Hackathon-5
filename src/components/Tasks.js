import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Task from "./Task";

export default class Tasks extends React.Component {


    render() {
        return (
            <div id="tasks_list" className="col-6 border border-dark">
                <Task/>
            </div>
        )
    }
}
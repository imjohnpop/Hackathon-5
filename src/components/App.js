import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Logs from "./Logs";

export default class App extends React.Component {

    taskWasAdded() {
        this.header.raiseNrOfTasks();
    }

    render() {
        return (
            <div id="page container">

                <Header ref={ (el) => {this.header = el;} }/>

                <div id="main">

                    <div className="row my-5">

                       <Form functionToRun={ this.taskWasAdded.bind(this) }/>

                    </div>

                    <div className="row mx-auto my-5">

                        <Tasks taskWasAdded={ this.taskWasAdded.bind(this) }/>

                        <Logs />

                    </div>

                </div>

            </div>
        )
    }
}
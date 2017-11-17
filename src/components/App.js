import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Logs from "./Logs";

export default class App extends React.Component {

    refreshTasks() {
        this.tasks.refreshTasks();
    }

    refreshLogs() {
        this.logs.refreshLogs();
    }

    setNrOfTasks(nr_of_tasks) {
        this.header.raiseNrOfTasks(nr_of_tasks);
    }

    setNrOfLogs(nr_of_logs) {
        this.header.raiseNrOfLogs(nr_of_logs);
    }




    render() {
        return (
            <div id="page container" className="bg-success">

                <Header ref={ (el) => {this.header = el;} }/>

                <div id="main">

                    <div className="row my-5">

                       <Form refreshTasks={ this.refreshTasks.bind(this) }  />

                    </div>

                    <div className="row mx-auto my-5">

                        <Tasks ref={(el) => {this.tasks = el;}} setNrOfTasks={ this.setNrOfTasks.bind(this) } refreshLogs={ this.refreshLogs.bind(this) } />

                        <Logs ref={(el) => {this.logs = el;}} setNrOfLogs={ this.setNrOfLogs.bind(this) }/>

                    </div>

                </div>

            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Task from "./Task";

export default class Tasks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],

        }
    }

    componentDidMount() {

        this.refreshTasks();

    }

    refreshTasks() {

        let self = this;
        $.ajax({
            type: 'get',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks'
        }).done(function(data) {
            self.setState({
                tasks: data,
            });
            self.props.setNrOfTasks(data.length);
        });
    }

    logAdd() {
        this.props.refreshLogs();
    }

    render() {
        let tasks = [];
        for(let i in this.state.tasks) {
            tasks[i] = <Task logAdd={ this.logAdd.bind(this) }
                key={this.state.tasks[i].id}
                id={this.state.tasks[i].id}
                name={this.state.tasks[i].name}
                // total={this.state.tasks[i].total}
            />;
        }
        return (
            <div id="tasks_list" className="col-6 border border-dark">
                { tasks }
            </div>
        )
    }
}
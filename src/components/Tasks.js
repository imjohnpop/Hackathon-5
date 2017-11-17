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

        this.refreshPosts();

    }

    refreshPosts() {

        let self = this;
        $.ajax({
            type: 'get',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks'
        }).done(function(data) {
            console.log(data);
            self.setState({
                tasks: data
            })

        });
    }
    render() {
        let tasks = [];
        for(let i in this.state.tasks) {
            tasks[i] = <Task
                key={this.state.tasks[i].id}
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
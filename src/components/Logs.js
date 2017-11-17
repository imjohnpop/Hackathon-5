import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Log from "./Log";

export default class Logs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logs: [],

        }
    }

    componentDidMount() {

        this.refreshLogs();

    }

    refreshLogs() {

        let self = this;
        $.ajax({
            type: 'get',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs'
        }).done(function(data) {
            self.setState({
                logs: data,
            });
            // self.props.setNrOfLogs(data.length);
        });
    }

    render() {

        let logs = [];
        for(let i in this.state.logs) {
            logs[i] = <Log
                key={this.state.logs[i].id}
                user_id={this.state.logs[i].user_id}
                task_id={this.state.logs[i].task_id}
                // name={this.state.logs[i].name}
                // total={this.state.tasks[i].total}
            />;
        }

        return (
            <div id="logs_list" className="col-6 border border-dark">
                { logs }
            </div>
        )
    }
}
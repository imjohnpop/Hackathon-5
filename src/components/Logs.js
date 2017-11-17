import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Log from "./Log";
import Pagination from "./Pagination";

export default class Logs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            onPage: 4,
            currentPage: 1,
            offset: 1
        };

    }

    componentDidMount() {

        this.refreshLogs();

    }

    refreshLogs() {

        let self = this;
        $.ajax({
            type: 'get',
            url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs',
            data: {
                limit: 4,
                offset: this.state.offset
            }
        }).done(function(data) {
            self.setState({
                logs: data,
            });
            self.props.setNrOfLogs(data.length);
        });
    }

    selectPage(id) {
        this.setState({
            currentPage: id,
            offset: this.state.onPage * (id-1)
        });

        this.refreshLogs();
    }

    render() {

        let logs = [];
        for(let i in this.state.logs) {
            logs[i] = <Log
                key={this.state.logs[i].id}
                user_id={this.state.logs[i].user_id}
                task_id={this.state.logs[i].task_id}
                task_name={this.state.logs[i].task_name}
                logged_at={this.state.logs[i].logged_at}
                // name={this.state.logs[i].name}
                // total={this.state.tasks[i].total}
            />;
        }

        let paginations = [];
        console.log(this.state.currentPage);
        for(let i = this.state.currentPage + 1; i < this.state.currentPage + 4; i++) {
            paginations[i] = <Pagination selectPage={ this.selectPage.bind(this) }
                key= {i}
                id={i}
            />;
        }
        console.log(paginations);
        return (
            <div id="logs_wrapper">
                <div id="logs_list" className="col-6">
                    { logs }
                </div>

                <div id="buttons">
                    { paginations }
                </div>
            </div>
        )
    }
}
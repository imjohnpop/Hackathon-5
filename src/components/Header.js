import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: 0,
            logs: 0
        }
    }
    raiseNrOfTasks(nr_of_tasks) {
        this.setState({
            tasks: nr_of_tasks
        })
    }
    raiseNrOfLogs(nr_of_logs) {
        this.setState({
            logs: nr_of_logs
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <h3 className="navbar-brand">The Work Log</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h6 className="nav-link">Tasks <span>({ this.state.tasks })</span></h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link">Logs <span>({ this.state.logs })</span></h6>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
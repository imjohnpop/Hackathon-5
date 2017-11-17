import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Logs from "./Logs";

export default class App extends React.Component {


    render() {
        return (
            <div id="page container">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h3 className="navbar-brand">The Work Log</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <h6 className="nav-link">Tasks <span>(0)</span></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="nav-link">Logs <span>(0)</span></h6>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="main">

                    <div className="row my-5">

                        <div id="form" className="col-6 mx-auto">
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="taskname">Add a new task!</label>
                                    <input className="form-control" type="text" name="taskname" id="taskname" placeholder="Add your to do task here..." />
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </div>

                    </div>

                    <div className="row mx-auto my-5">

                        <div id="tasks_list" className="col-6 border border-dark">
                            <div className="task card">
                                <div className="card-body">
                                    <h4 className="card-title">To Do Task</h4>
                                    <p className="card-text">Find a job.</p>
                                    <button className="btn btn-dark"><i className="fa fa-plus-square text-light" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>

                        <div id="logs_list" className="col-6 border border-dark">
                            <div className="goal card">
                                <div className="card-body">
                                    <h4 className="card-title">Task In Progress</h4>
                                    <p className="card-text">Do the work log app.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
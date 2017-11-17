import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Form extends React.Component {
    render() {
        return (
            <div id="form" className="col-6 mx-auto">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="taskname">Add a new task!</label>
                        <input className="form-control" type="text" name="taskname" id="taskname" placeholder="Add your to do task here..." />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}
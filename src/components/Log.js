import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Button from './Button.js';

export default class Log extends React.Component {

    constructor(props) {
        super(props);



        this.state={
            finished: false
        }
    }

    finished() {
        this.setState({
            finished: true
        });
    }

    render() {

        if(this.state.finished) {
            var ms = Date.now() - Date.parse(this.props.logged_at);
            var sec = ms/1000;
            var min = sec % 60;
            var hour = min % 60;
            var day = hour % 24;
            var final = "Finished in: "+ ms;
            console.log(sec);
            console.log(min);
            console.log(hour);
            console.log(day);
        } else {
            var time = this.props.logged_at;
            var final = "Created at: "+ time;
        }

        return (
            <div className="log card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.task_name}</h4>
                    <p className="card-text">{ final }</p>
                    <Button finished={ this.finished.bind(this) } key={this.props.id} id={this.props.id}/>
                </div>
            </div>
        )
    }
}
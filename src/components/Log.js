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
    msToTime(x) {
        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }
        let ms = x % 1000;
        x = (x - ms) / 1000;
        let secs = x % 60;
        x = (x - secs) / 60;
        let mins = x % 60;
        let hrs = (x - mins) / 60;
        let time = pad(hrs) + 'hr:' + pad(mins) + 'min:' + pad(secs) + 'sec';
        return time;
    }
    render() {
        if(this.state.finished) {
            let ms = Date.now() - Date.parse(this.props.logged_at);
            let time = this.msToTime(ms);
            var final = "Finished in: " + time;
        } else {
            let time = this.props.logged_at;
            var final = "Created at: " + time;
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
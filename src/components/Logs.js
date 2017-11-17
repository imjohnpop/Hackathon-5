import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Components imports
import Log from "./Log";

export default class Logs extends React.Component {


    render() {
        return (
            <div id="logs_list" className="col-6 border border-dark">
                <Log/>
            </div>
        )
    }
}
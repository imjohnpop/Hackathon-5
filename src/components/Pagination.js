import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Pagination extends React.Component {

    constructor(props) {
        super(props);

    }

    generateLogs(id) {

        this.props.selectPage(id);
    }

    render() {
        return (
            <button onClick={() => { this.generateLogs(this.props.id) }} className="btn-dark">{this.props.id}</button>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            id: this.props.id,
            hidden: false
        }
    }

    logCompleted() {
        this.setState({
           hidden:true
        });
        this.props.finished();
    }

    render() {
        if(this.state.hidden) {
            return null;
        }
        return (
            <button id={this.state.id} className="btn btn-dark"
                    onClick={this.logCompleted.bind(this)}>
                Complete
            </button>
        )
    }
}







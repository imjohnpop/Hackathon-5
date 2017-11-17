import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Header extends React.Component {
    render() {
        return (
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
        )
    }
}
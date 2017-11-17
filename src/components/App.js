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

                <Header/>

                <div id="main">

                    <div className="row my-5">

                       <Form/>

                    </div>

                    <div className="row mx-auto my-5">

                        <Tasks />

                        <Logs />

                    </div>

                </div>

            </div>
        )
    }
}
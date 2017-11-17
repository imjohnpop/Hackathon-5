webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _Header = __webpack_require__(29);

var _Header2 = _interopRequireDefault(_Header);

var _Form = __webpack_require__(30);

var _Form2 = _interopRequireDefault(_Form);

var _Tasks = __webpack_require__(31);

var _Tasks2 = _interopRequireDefault(_Tasks);

var _Logs = __webpack_require__(33);

var _Logs2 = _interopRequireDefault(_Logs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components imports


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'refreshList',
        value: function refreshList() {
            this.tasks.refreshTasks();
            this.logs.refreshLogs();
        }
    }, {
        key: 'setNrOfTasks',
        value: function setNrOfTasks(nr_of_tasks) {
            this.header.raiseNrOfTasks(nr_of_tasks);
        }
    }, {
        key: 'setNrOfLogs',
        value: function setNrOfLogs(nr_of_logs) {
            this.header.raiseNrOfLogs(nr_of_logs);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'page container' },
                _react2.default.createElement(_Header2.default, { ref: function ref(el) {
                        _this2.header = el;
                    } }),
                _react2.default.createElement(
                    'div',
                    { id: 'main' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row my-5' },
                        _react2.default.createElement(_Form2.default, { taskWasAdded: this.refreshList.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row mx-auto my-5' },
                        _react2.default.createElement(_Tasks2.default, { ref: function ref(el) {
                                _this2.tasks = el;
                            }, setNrOfTasks: this.setNrOfTasks.bind(this) }),
                        _react2.default.createElement(_Logs2.default, { ref: function ref(el) {
                                _this2.logs = el;
                            }, setNrOfLogs: this.setNrOfLogs.bind(this) })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            tasks: 0,
            logs: 0
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'raiseNrOfTasks',
        value: function raiseNrOfTasks(nr_of_tasks) {
            this.setState({
                tasks: nr_of_tasks
            });
        }
    }, {
        key: 'raiseNrOfLogs',
        value: function raiseNrOfLogs(nr_of_logs) {
            this.setState({
                logs: nr_of_logs
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-expand-sm navbar-dark bg-dark' },
                _react2.default.createElement(
                    'h3',
                    { className: 'navbar-brand' },
                    'The Work Log'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNav' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2.default.createElement(
                                'h6',
                                { className: 'nav-link' },
                                'Tasks ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '(',
                                    this.state.tasks,
                                    ')'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2.default.createElement(
                                'h6',
                                { className: 'nav-link' },
                                'Logs ',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '(',
                                    this.state.logs,
                                    ')'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            input_name: ''
        };
        return _this;
    }

    _createClass(Form, [{
        key: 'formSubmitted',
        value: function formSubmitted(event) {
            var _this2 = this;

            event.preventDefault();
            _jquery2.default.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks/create',
                data: {
                    name: this.state.input_name
                }
            }).done(function (data) {
                (0, _jquery2.default)('#name').value = '';
                _this2.props.refreshList();
            });
        }
    }, {
        key: 'nameChanged',
        value: function nameChanged(event) {
            this.setState({
                input_name: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { id: 'form', className: 'col-6 mx-auto' },
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: function onSubmit(event) {
                            return _this3.formSubmitted(event);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'name' },
                            'Add a new task!'
                        ),
                        _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'name', id: 'name',
                            placeholder: 'Add your to do task here...',
                            value: this.state.input_name,
                            onChange: function onChange(event) {
                                return _this3.nameChanged(event);
                            } })
                    ),
                    _react2.default.createElement('input', { type: 'submit', className: 'btn btn-dark', value: 'Submit' })
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _Task = __webpack_require__(32);

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components imports


var Tasks = function (_React$Component) {
    _inherits(Tasks, _React$Component);

    function Tasks(props) {
        _classCallCheck(this, Tasks);

        var _this = _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).call(this, props));

        _this.state = {
            tasks: []

        };
        return _this;
    }

    _createClass(Tasks, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.refreshTasks();
        }
    }, {
        key: 'refreshTasks',
        value: function refreshTasks() {

            var self = this;
            _jquery2.default.ajax({
                type: 'get',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/tasks'
            }).done(function (data) {
                self.setState({
                    tasks: data
                });
                self.props.setNrOfTasks(data.length);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var tasks = [];
            for (var i in this.state.tasks) {
                tasks[i] = _react2.default.createElement(_Task2.default, {
                    key: this.state.tasks[i].id,
                    name: this.state.tasks[i].name
                    // total={this.state.tasks[i].total}
                });
            }
            return _react2.default.createElement(
                'div',
                { id: 'tasks_list', className: 'col-6 border border-dark' },
                tasks
            );
        }
    }]);

    return Tasks;
}(_react2.default.Component);

exports.default = Tasks;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
    _inherits(Task, _React$Component);

    function Task(props) {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));
    }

    _createClass(Task, [{
        key: 'taskLogged',
        value: function taskLogged(event) {
            var _this2 = this;

            event.preventDefault();
            _jquery2.default.ajax({
                method: 'post',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs/create',
                data: {
                    name: this.state.input_name
                }
            }).done(function (data) {
                _this2.props.refreshList();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'task card' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'card-title' },
                        this.props.name
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'card-text' },
                        'Time spend: ',
                        this.props.total,
                        ' minutes'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-dark', onClick: function onClick(event) {
                                return _this3.taskLogged(event);
                            } },
                        _react2.default.createElement('i', { className: 'fa fa-plus-square text-light', 'aria-hidden': 'true' })
                    )
                )
            );
        }
    }]);

    return Task;
}(_react2.default.Component);

exports.default = Task;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _Log = __webpack_require__(34);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components imports


var Logs = function (_React$Component) {
    _inherits(Logs, _React$Component);

    function Logs(props) {
        _classCallCheck(this, Logs);

        var _this = _possibleConstructorReturn(this, (Logs.__proto__ || Object.getPrototypeOf(Logs)).call(this, props));

        _this.state = {
            logs: []

        };
        return _this;
    }

    _createClass(Logs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.refreshLogs();
        }
    }, {
        key: 'refreshLogs',
        value: function refreshLogs() {

            var self = this;
            _jquery2.default.ajax({
                type: 'get',
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs'
            }).done(function (data) {
                self.setState({
                    logs: data
                });
                self.props.setNrOfLogs(data.length);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var logs = [];
            for (var i in this.state.logs) {
                logs[i] = _react2.default.createElement(_Log2.default, {
                    key: this.state.logs[i].id,
                    user_id: this.state.logs[i].user_id,
                    task_id: this.state.logs[i].task_id
                    // name={this.state.logs[i].name}
                    // total={this.state.tasks[i].total}
                });
            }

            return _react2.default.createElement(
                'div',
                { id: 'logs_list', className: 'col-6 border border-dark' },
                logs
            );
        }
    }]);

    return Logs;
}(_react2.default.Component);

exports.default = Logs;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Log = function (_React$Component) {
    _inherits(Log, _React$Component);

    function Log(props) {
        _classCallCheck(this, Log);

        return _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, props));
    }

    _createClass(Log, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'log card' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'card-title' },
                        this.props.task_id
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'card-text' },
                        'asdasdasd'
                    )
                )
            );
        }
    }]);

    return Log;
}(_react2.default.Component);

exports.default = Log;

/***/ })

},[16]);
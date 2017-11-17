webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('react-app'));

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

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
        key: 'refreshTasks',
        value: function refreshTasks() {
            this.tasks.refreshTasks();
        }
    }, {
        key: 'refreshLogs',
        value: function refreshLogs() {
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
                        _react2.default.createElement(_Form2.default, { refreshTasks: this.refreshTasks.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row mx-auto my-5' },
                        _react2.default.createElement(_Tasks2.default, { ref: function ref(el) {
                                _this2.tasks = el;
                            }, setNrOfTasks: this.setNrOfTasks.bind(this), refreshLogs: this.refreshLogs.bind(this) }),
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

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
                _this2.props.refreshTasks();
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

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
        key: 'logAdd',
        value: function logAdd() {
            this.props.refreshLogs();
        }
    }, {
        key: 'render',
        value: function render() {
            var tasks = [];
            for (var i in this.state.tasks) {
                tasks[i] = _react2.default.createElement(_Task2.default, { logAdd: this.logAdd.bind(this),
                    key: this.state.tasks[i].id,
                    id: this.state.tasks[i].id,
                    name: this.state.tasks[i].name
                    // total={this.state.tasks[i].total}
                });
            }
            return _react2.default.createElement(
                'div',
                { id: 'tasks_list', className: 'col-6' },
                tasks
            );
        }
    }]);

    return Tasks;
}(_react2.default.Component);

exports.default = Tasks;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

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
                    task_id: this.props.id,
                    task_name: this.props.name,
                    duration: 0
                }
            }).done(function (data) {
                _this2.props.logAdd();
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Log = __webpack_require__(34);

var _Log2 = _interopRequireDefault(_Log);

var _Pagination = __webpack_require__(36);

var _Pagination2 = _interopRequireDefault(_Pagination);

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
            logs: [],
            onPage: 4,
            currentPage: 1,
            offset: 1
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
                url: 'http://classes.codingbootcamp.cz/assets/classes/react-hackathon/api/logs',
                data: {
                    limit: 4,
                    offset: this.state.offset
                }
            }).done(function (data) {
                self.setState({
                    logs: data
                });
                self.props.setNrOfLogs(data.length);
            });
        }
    }, {
        key: 'selectPage',
        value: function selectPage(id) {
            this.setState({
                currentPage: id,
                offset: this.state.onPage * (id - 1)
            });

            this.refreshLogs();
        }
    }, {
        key: 'render',
        value: function render() {

            var logs = [];
            for (var i in this.state.logs) {
                logs[i] = _react2.default.createElement(_Log2.default, {
                    key: this.state.logs[i].id,
                    user_id: this.state.logs[i].user_id,
                    task_id: this.state.logs[i].task_id,
                    task_name: this.state.logs[i].task_name,
                    logged_at: this.state.logs[i].logged_at
                    // name={this.state.logs[i].name}
                    // total={this.state.tasks[i].total}
                });
            }

            var paginations = [];
            console.log(this.state.currentPage);
            for (var _i = this.state.currentPage + 1; _i < this.state.currentPage + 4; _i++) {
                paginations[_i] = _react2.default.createElement(_Pagination2.default, { selectPage: this.selectPage.bind(this),
                    key: _i,
                    id: _i
                });
            }
            console.log(paginations);
            return _react2.default.createElement(
                'div',
                { id: 'logs_wrapper' },
                _react2.default.createElement(
                    'div',
                    { id: 'logs_list', className: 'col-6' },
                    logs
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'buttons' },
                    paginations
                )
            );
        }
    }]);

    return Logs;
}(_react2.default.Component);

exports.default = Logs;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _Button = __webpack_require__(35);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Log = function (_React$Component) {
    _inherits(Log, _React$Component);

    function Log(props) {
        _classCallCheck(this, Log);

        var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, props));

        _this.state = {
            finished: false
        };
        return _this;
    }

    _createClass(Log, [{
        key: 'finished',
        value: function finished() {
            this.setState({
                finished: true
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.finished) {
                var ms = Date.now() - Date.parse(this.props.logged_at);
                var sec = ms / 1000;
                var min = sec % 60;
                var hour = min % 60;
                var day = hour % 24;
                var final = "Finished in: " + ms;
                console.log(sec);
                console.log(min);
                console.log(hour);
                console.log(day);
            } else {
                var time = this.props.logged_at;
                var final = "Created at: " + time;
            }

            return _react2.default.createElement(
                'div',
                { className: 'log card' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'card-title' },
                        this.props.task_name
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'card-text' },
                        final
                    ),
                    _react2.default.createElement(_Button2.default, { finished: this.finished.bind(this), key: this.props.id, id: this.props.id })
                )
            );
        }
    }]);

    return Log;
}(_react2.default.Component);

exports.default = Log;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            id: _this.props.id,
            hidden: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'logCompleted',
        value: function logCompleted() {
            this.setState({
                hidden: true
            });
            this.props.finished();
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.hidden) {
                return null;
            }
            return _react2.default.createElement(
                'button',
                { id: this.state.id, className: 'btn btn-dark',
                    onClick: this.logCompleted.bind(this) },
                'Complete'
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));
    }

    _createClass(Pagination, [{
        key: 'generateLogs',
        value: function generateLogs(id) {

            this.props.selectPage(id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'button',
                { onClick: function onClick() {
                        _this2.generateLogs(_this2.props.id);
                    }, className: 'btn-dark' },
                this.props.id
            );
        }
    }]);

    return Pagination;
}(_react2.default.Component);

exports.default = Pagination;

/***/ })
],[16]);
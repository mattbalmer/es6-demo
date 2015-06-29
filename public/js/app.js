(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var list = null;
var tasks = null;

var listen = function listen() {
    var taskElements = list.querySelectorAll('.task');

    var _loop = function (i) {
        taskElements[i].addEventListener('click', function () {
            tasks[i].toggle();
            render();
        });
    };

    for (var i = 0; i < taskElements.length; i++) {
        _loop(i);
    }
};

var render = function render() {
    var html = tasks.map(function (task) {
        return '<li class=\'task ' + (task.completed ? 'completed' : '') + '\'>' + task.content + '</li>';
    });

    list.innerHTML = html;

    listen();
};

var init = function init() {
    list = document.getElementById('todo');
    tasks = [];

    tasks.push(new _task2['default']('Finish this talk'));

    render();
};

exports.init = init;

},{"./task":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

document.addEventListener('DOMContentLoaded', _app.init);

},{"./app":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = (function () {
    function Task(content) {
        _classCallCheck(this, Task);

        this.content = content;
        this.completed = false;
    }

    _createClass(Task, [{
        key: "toggle",
        value: function toggle() {
            this.completed = !this.completed;
        }
    }]);

    return Task;
})();

exports["default"] = Task;
module.exports = exports["default"];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dGJhbG1lci9Xb3Jrc3BhY2UvSlMvZXM2LWRlbW8vY2xpZW50L2FwcC5qcyIsIi9Vc2Vycy9tYXR0YmFsbWVyL1dvcmtzcGFjZS9KUy9lczYtZGVtby9jbGllbnQvaW5kZXguanMiLCIvVXNlcnMvbWF0dGJhbG1lci9Xb3Jrc3BhY2UvSlMvZXM2LWRlbW8vY2xpZW50L3Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztvQkNBaUIsUUFBUTs7OztBQUV6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVqQixJQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sR0FBYztBQUNwQixRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7OzBCQUUxQyxDQUFDO0FBQ0wsb0JBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztBQUNqRCxpQkFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLGtCQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQzs7O0FBSlAsU0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Y0FBckMsQ0FBQztLQUtSO0NBQ0osQ0FBQzs7QUFFRixJQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sR0FBYztBQUNwQixRQUFJLElBQUksR0FBRyxLQUFLLENBQ1gsR0FBRyxDQUFDLFVBQUEsSUFBSTtzQ0FBdUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUUsRUFBRSxDQUFBLFdBQUssSUFBSSxDQUFDLE9BQU87S0FBTyxDQUFDLENBQUM7O0FBRTlGLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUV0QixVQUFNLEVBQUUsQ0FBQztDQUNaLENBQUM7O0FBRUYsSUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFJLEdBQWM7QUFDbEIsUUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsU0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFWCxTQUFLLENBQUMsSUFBSSxDQUFFLHNCQUFTLGtCQUFrQixDQUFDLENBQUUsQ0FBQzs7QUFFM0MsVUFBTSxFQUFFLENBQUM7Q0FDWixDQUFDOztRQUVPLElBQUksR0FBSixJQUFJOzs7OzttQkNsQ1EsT0FBTzs7QUFFNUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixPQUZuQyxJQUFJLENBRXNDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNGL0IsSUFBSTtBQUNWLGFBRE0sSUFBSSxDQUNULE9BQU8sRUFBRTs4QkFESixJQUFJOztBQUVqQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7aUJBSmdCLElBQUk7O2VBTWYsa0JBQUc7QUFDRCxnQkFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDeEM7OztXQVJnQixJQUFJOzs7cUJBQUosSUFBSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuXG5sZXQgbGlzdCA9IG51bGw7XG5sZXQgdGFza3MgPSBudWxsO1xuXG5sZXQgbGlzdGVuID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRhc2tFbGVtZW50cyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza0VsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0YXNrc1tpXS50b2dnbGUoKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5sZXQgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGh0bWwgPSB0YXNrc1xuICAgICAgICAubWFwKHRhc2sgPT4gYDxsaSBjbGFzcz0ndGFzayAke3Rhc2suY29tcGxldGVkID8gJ2NvbXBsZXRlZCc6ICcnfSc+JHt0YXNrLmNvbnRlbnR9PC9saT5gKTtcblxuICAgIGxpc3QuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGxpc3RlbigpO1xufTtcblxubGV0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcbiAgICB0YXNrcyA9IFtdO1xuXG4gICAgdGFza3MucHVzaCggbmV3IFRhc2soJ0ZpbmlzaCB0aGlzIHRhbGsnKSApO1xuXG4gICAgcmVuZGVyKCk7XG59O1xuXG5leHBvcnQgeyBpbml0IH07IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vYXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG59Il19

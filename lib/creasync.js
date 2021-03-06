'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// opts is an object
// e.g. { component, loading, error }

var creasync = function creasync(opts) {
  return (
    // return class
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          loaded: false,
          error: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          opts.component.then(function (module) {
            _this2.Component = module.default;
            _this2.setState({ loaded: true });
          }).catch(function () {
            _this2.setState({ error: true });
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var Component = this.Component;
          var Loading = opts.loading;
          var _state = this.state,
              loaded = _state.loaded,
              error = _state.error;

          if (loaded && !error) {
            return _react2.default.createElement(Component, this.props);
          } else if (!loaded && error) {
            var _Error = opts.error;
            return _react2.default.createElement(_Error, null);
          }
          return _react2.default.createElement(Loading, null);
        }
      }]);

      return _class;
    }(_react2.default.Component)
  );
};

exports.default = creasync;
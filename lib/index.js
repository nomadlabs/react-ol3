'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _openlayers = require('openlayers');

var _openlayers2 = _interopRequireDefault(_openlayers);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Map = (function (_React$Component) {
  _inherits(Map, _React$Component);

  _createClass(Map, null, [{
    key: 'propTypes',
    value: {
      data: _react2['default'].PropTypes.array,
      zoom: _react2['default'].PropTypes.number,
      target: _react2['default'].PropTypes.string,
      center: _react2['default'].PropTypes.array
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      data: [],
      center: [0, 0],
      zoom: 2,
      target: 'map'
    },
    enumerable: true
  }]);

  function Map(props) {
    _classCallCheck(this, Map);

    _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).call(this, props);
    this.state = {
      id: props.target
    };
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.olMapElement = new _openlayers2['default'].map(this.state.id);
      _get(Object.getPrototypeOf(Map.prototype), 'componentDidMount', this).call(this);
      this.setState({ map: this.olMapElement });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {}
  }, {
    key: 'render',
    value: function render() {
      var map = this.olMapElement;

      return _react2['default'].createElement('div', { id: this.state.id });
    }
  }]);

  return Map;
})(_react2['default'].Component);

exports.Map = Map;
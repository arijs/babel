var Foo = /*#__PURE__*/function () {
  "use strict";

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);

    _foo.set(this, {
      writable: true,
      value: 1
    });
  }

  babelHelpers.createClass(Foo, [{
    key: "test",
    value: function test() {
      var _temp;

      var _babelHelpers$classPr;

      var Nested = /*#__PURE__*/function (_ref) {
        babelHelpers.inherits(Nested, _ref);

        var _super = babelHelpers.createSuper(Nested);

        function Nested(...args) {
          var _this;

          babelHelpers.classCallCheck(this, Nested);
          _this = _super.call(this, ...args);

          _foo2.set(babelHelpers.assertThisInitialized(_this), {
            writable: true,
            value: 3
          });

          return _this;
        }

        return Nested;
      }((_temp = (_babelHelpers$classPr = babelHelpers.classPrivateFieldGet(this, _foo), /*#__PURE__*/function () {
        function _class2() {
          babelHelpers.classCallCheck(this, _class2);
          babelHelpers.defineProperty(this, _babelHelpers$classPr, 2);
        }

        return _class2;
      }()), _temp));

      var _foo2 = new WeakMap();
    }
  }]);
  return Foo;
}();

var _foo = new WeakMap();
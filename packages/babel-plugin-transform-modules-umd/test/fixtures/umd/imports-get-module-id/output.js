(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("custom-module-id/input", ["foo-bar", "custom-module-id/mylib/foo-bar", "fizzbuzz"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo-bar"), require("./mylib/foo-bar"), require("fizzbuzz"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.fooBAR, global.customModuleId.mylib.fooBar, global.fizz.buzz);
    global.customModuleId = global.customModuleId || {};
    global.customModuleId.input = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_fooBar, _fooBar2, _fizzbuzz) {
  "use strict";

  _fooBar = babelHelpers.interopRequireDefault(_fooBar);
  _fooBar2 = babelHelpers.interopRequireDefault(_fooBar2);
  _fizzbuzz = babelHelpers.interopRequireDefault(_fizzbuzz);
});

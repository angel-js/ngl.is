(function (register) {
  'use strict';

  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };

  var isNumber = function (arg) {
    return typeof arg === 'number';
  };

  var isString = function (arg) {
    return typeof arg === 'string';
  };

  var isFunction = function (arg) {
    return typeof arg === 'function';
  };

  var isArray = function (arg) {
    return arg instanceof Array;
  };

  var isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  var isNumeric = function (arg) {
    return !isNaN(arg);
  };

  var isScalar = function (arg) {
    var argType = typeof arg;

    return (
      argType === 'string' ||
      argType === 'number' ||
      argType === 'boolean'
    );
  };

  register({
    nglIsDefined: isDefined,
    nglIsNumber: isNumber,
    nglIsString: isString,
    nglIsFunction: isFunction,
    nglIsArray: isArray,
    nglIsObject: isObject,
    nglIsNumeric: isNumeric,
    nglIsScalar: isScalar
  });

})(function (api) {
  'use strict';

  var mod = angular.module('ngl.is', []);

  var registerFactory = function (method) {
    mod.factory(method, function () {
      return api[method];
    });
  };

  for (var index in api) { registerFactory(index); }
});

"use strict";

var browsers = ["Chrome", "FireFox", "Edge", "Safari", "Opera"];

for (var browser in browsers) {
  console.log(browser);
}

for (var index in browsers) {
  console.log(browsers[index]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _index = _step.value;

    console.log(_index);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(browsers);
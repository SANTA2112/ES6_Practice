"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator);

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return 1;

        case 3:
          _context.next = 5;
          return 2;

        case 5:
          _context.next = 7;
          return 3;

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);

          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 9]]);
}

var iterator = generator();
console.log(iterator.next());
console.log(iterator.return());
console.log(iterator.throw(new Error("Error")));
console.log(iterator.next());
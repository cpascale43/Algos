// --- Directions
// Write a function that, given an integer X, returns an integer that corresponds to
// the minimum number of steps required to change X to a fibonacci number.
// In each step you can either decrement or increment the current number.
// X will be between 0 and 1,000,000 inclusive.

// --- Examples
// minStepsFib(15) => 2 (13 is closest)
// minStepsFib(1) => 0
// minStepsFib(13) => 0

// check if number is a fibonacci number
// if yes, return 0
// else, calculate distance from nearest element in sequence of fib numbers using absolute value

const checkFib = function (x) {
  let a = 0;
  let b = 1;

  if (x === a || x === b) return true;

  let add = Math.sqrt(5 * x ** 2 + 4);
  let subtract = Math.sqrt(5 * x ** 2 - 4);

  if (Number.isInteger(add) || Number.isInteger(subtract)) {
    return true;
  }

  return false;
};

const getFib = function (x) {
  if (x < 2) return x;

  return getFib(x - 1) + getFib(x - 2);
};

const minStepsFib = function (x) {
  if (checkFib(x)) return 0;

  // x is less than 1M, this is the closest fibonacci number to 1M
  if (x > 832040) {
    return x - 832040;
  }

  const fibs = [];

  for (let i = 0; i < 31; i++) {
    fibs.push(getFib(i));
  }

  const closest = fibs.reduce(function(prev, curr) {
      return Math.abs(curr - x) < Math.abs(prev - x) ? curr: prev;
  })

  return Math.abs(x-closest);
};

module.exports = minStepsFib;

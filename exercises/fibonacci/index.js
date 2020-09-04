// --- Directions
// Compute the nth fibonacci number recursively.

// --- Examples
//   fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3
// ...

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

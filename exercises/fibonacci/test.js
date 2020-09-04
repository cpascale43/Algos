const fib = require("./index");

test("function fib exists", () => {
  expect(typeof fib).toEqual("function");
});

test("2 returns the 2nd fibonacci number in the series", () => {
  expect(fib(2)).toEqual(1);
});

test("3 returns the 3rd fibonacci number in the series", () => {
  expect(fib(3)).toEqual(2);
});

test("26 returns the 26th fibonacci number in the series", () => {
  expect(fib(26)).toEqual(121393);
});

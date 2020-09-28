const maxSubSum = require("./index");

test("maxSubSum function exists", () => {
  expect(typeof maxSubSum).toEqual("function");
});

test("maxSubSum works on an empty array", () => {
  expect(maxSubSum([], 4)).toEqual(null);
});

test("maxSubSum works on an array of numbers", () => {
  expect(maxSubSum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
});

test("maxSubSum works on the same array of numbers with different n", () => {
  expect(maxSubSum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
});

test("maxSubSum works when n is small", () => {
  expect(maxSubSum([4, 2, 1, 6], 1)).toEqual(6);
});

test("maxSubSum works when n is larger", () => {
  expect(maxSubSum([4, 2, 1, 6, 2], 4)).toEqual(13);
});

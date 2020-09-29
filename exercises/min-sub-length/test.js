const minSubLen = require("./index");

test("minSubLen function exists", () => {
  expect(typeof minSubLen).toEqual("function");
});

test("minSubLen works on an empty array", () => {
  expect(minSubLen([], 3)).toEqual(0);
});

test("minSubLen works on an array of numbers", () => {
  expect(minSubLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
});

test("minSubLen works on the same array of numbers with different n", () => {
  expect(minSubLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
});

test("minSubLen works when n is larger than the sum of all numbers in the array", () => {
  expect(minSubLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
});

test("minSubLen works when the array has larger numbers", () => {
  expect(minSubLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1);
});

test("minSubLen works when the returned array should be of length 2", () => {
  expect(minSubLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
});

test("minSubLen works when the returned array should be of length 2", () => {
  expect(minSubLen([2, 1, 6, 5, 4], 9)).toEqual(2);
});

test("minSubLen works when the returned array should be of length 2", () => {
  expect(minSubLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
});

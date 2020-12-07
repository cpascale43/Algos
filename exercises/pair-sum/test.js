const pairSum = require("./index");

test("function pairSum exists", () => {
  expect(typeof pairSum).toEqual("function");
});

test("[1, 1, 2, 3, 4, 5] and 7 returns true", () => {
  expect(pairSum([1, 1, 2, 3, 4, 5], 7)).toBeTruthy();
});

test("[1, 2, 3, 4, 5] and 10 returns false", () => {
  expect(pairSum([1, 2, 3, 4, 5], 10)).toBeFalsy();
});

test("[0, 2, 3, 6, 9, 10] and 10 returns true", () => {
  expect(pairSum([0, 2, 3, 6, 9, 10], 10)).toBeTruthy();
});

test("[-2, 0, 4, 6, 10] and 8 returns true", () => {
  expect(pairSum([-2, 0, 4, 6, 10], 8)).toBeTruthy();
});

test("[1] and 2 returns false", () => {
  expect(pairSum([1], 2)).toBeFalsy();
});

test("[2] and 2 returns false", () => {
  expect(pairSum([2], 2)).toBeFalsy();
});

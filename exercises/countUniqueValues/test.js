const countUniqueValues = require("./index");

test("countUniqueValues function exists", () => {
  expect(typeof countUniqueValues).toEqual("function");
});

test("countUniqueValues works on an empty array", () => {
  expect(countUniqueValues([])).toEqual(0);
});

test("countUniqueValues works on tiny inputs", () => {
    expect(countUniqueValues([1, 1, 2])).toEqual(2);
  });

test("countUniqueValues works on small inputs", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
});

test("countUniqueValues works on medium inputs", () => {
  expect(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])).toEqual(6);
});

test("countUniqueValues works on large inputs", () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
});

test("countUniqueValues works on negative numbers", () => {
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
});

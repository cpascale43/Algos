const sudokuChecker = require("./index");

test("function sudokuChecker exists", () => {
  expect(typeof sudokuChecker).toEqual("function");
});

test("a 3x3 matrix is invalid if it doesn't contain values 1-3", () => {
  const mat = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];
  expect(sudokuChecker(mat)).toEqual("INVALID");
});

test("a 4x4 matrix is valid", () => {
  const mat = [
    [1, 2, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 1, 2],
    [4, 1, 2, 3],
  ];
  expect(sudokuChecker(mat)).toEqual("VALID");
});

test("a 4x4 matrix is invalid if it doesn't contain values 1-4", () => {
  const mat = [
    [3, 2, 3, 2],
    [2, 3, 2, 3],
    [3, 2, 3, 2],
    [2, 3, 2, 3],
  ];
  expect(sudokuChecker(mat)).toEqual("INVALID");
});

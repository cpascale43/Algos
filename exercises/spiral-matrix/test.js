const spiralMatrix = require("./index");

test("function spiralMatrix exists", () => {
  expect(typeof spiralMatrix).toEqual("function");
});

test("spiralMatrix works on 3", () => {
  expect(spiralMatrix(3)).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);
});

test("spiralMatrix works on 1", () => {
  expect(spiralMatrix(1)).toEqual([[1]]);
});

test("spiralMatrix works on 4", () => {
  expect(spiralMatrix(4)).toEqual([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]);
});

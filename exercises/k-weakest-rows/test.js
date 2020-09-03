const kWeakestRows = require("./index");

test("function kWeakestRows exists", () => {
  expect(typeof kWeakestRows).toEqual("function");
});

test("sample input", () => {
  let mat = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ];
  expect(kWeakestRows(mat, 2)).toEqual([0, 2]);
});

test("sample input 2", () => {
  let mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ];
  expect(kWeakestRows(mat, 3)).toEqual([2, 0, 3]);
});

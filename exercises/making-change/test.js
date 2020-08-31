const changePossibilities = require("./index");

test("function changePossibilities exists", () => {
  expect(typeof changePossibilities).toEqual("function");
});

test("one way to make zero cents", () => {
  expect(changePossibilities(0, [1, 2])).toEqual(1);
});

test("no ways if no coins", () => {
  expect(changePossibilities(1, [])).toEqual(0);
});

test("sample input", () => {
  expect(changePossibilities(4, [1, 2, 3])).toEqual(4);
});

test("big coin value", () => {
  expect(changePossibilities(5, [25, 50])).toEqual(0);
});

test("big target amount", () => {
  expect(changePossibilities(50, [5, 10])).toEqual(6);
});

test("change for one dollar", () => {
  expect(changePossibilities(100, [1, 5, 10, 25, 50])).toEqual(292);
});

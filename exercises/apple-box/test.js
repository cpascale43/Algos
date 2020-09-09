const appleBox = require("./index");

test("function appleBox exists", () => {
  expect(typeof appleBox).toEqual("function");
});

test("appleBox works on an array with 4650 grams", () => {
  let A = [4650, 150, 150, 150];
  expect(appleBox(A)).toEqual(2);
});

test("appleBox works on an array with 4650 grams", () => {
  let A = [4850, 100, 30, 30, 100, 50, 100];
  expect(appleBox(A)).toEqual(3);
});

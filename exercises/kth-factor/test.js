const kthFactor = require("./index");

test("function kthFactor exists", () => {
  expect(typeof kthFactor).toEqual("function");
});

test("kthFactor works on 12 and 3", () => {
  expect(kthFactor(12, 3)).toEqual(3);
});

test("kthFactor works on 7 and 2", () => {
  expect(kthFactor(7, 2)).toEqual(7);
});

test("kthFactor works on 4 and 4", () => {
  expect(kthFactor(4, 4)).toEqual(-1);
});

test("kthFactor works on 1 and 1", () => {
  expect(kthFactor(1, 1)).toEqual(1);
});

test("kthFactor works on 1000 and 3", () => {
  expect(kthFactor(1000, 3)).toEqual(4);
});

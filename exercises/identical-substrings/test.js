const countIdenticalSubstrings = require("./index");

test("function countIdenticalSubstrings exists", () => {
  expect(typeof countIdenticalSubstrings).toEqual("function");
});

test("countIdenticalSubstrings works on tiny inputs", () => {
  expect(countIdenticalSubstrings("k")).toEqual(1);
});

test("countIdenticalSubstrings works on small inputs", () => {
  expect(countIdenticalSubstrings("ffa")).toEqual(4);
});

test("countIdenticalSubstrings works on medium inputs", () => {
  expect(countIdenticalSubstrings("zzzyz")).toEqual(8);
});

test("countIdenticalSubstrings works on large inputs", () => {
  expect(countIdenticalSubstrings("ffffeerttttooo")).toEqual();
});

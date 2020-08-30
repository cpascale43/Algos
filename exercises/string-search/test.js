const indexOf = require("./index");

test("indexOf function exists", () => {
  expect(typeof indexOf).toEqual("function");
});

test("first index of or in hello world is 7", () => {
  const searched = indexOf("or", "hello world");

  expect(searched).toEqual(7);
});

test("first index of oox in ooboxoooxo is 6", () => {
  const searched = indexOf("hello world", "or");

  expect(searched).toEqual(-1);
});

test("hello world does not exist in or", () => {
  const searched = indexOf("oox", "ooboxoooxo");

  expect(searched).toEqual(6);
});

test("howdy does not exist in hello world", () => {
  const searched = indexOf("howdy", "hello world");

  expect(searched).toEqual(-1);
});

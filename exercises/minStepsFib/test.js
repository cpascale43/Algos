const minStepsFib = require("./index");

test("function minStepsFib exists", () => {
  expect(typeof minStepsFib).toEqual("function");
});

test("minStepsFib works on the number 15", () => {
  expect(minStepsFib(15)).toEqual(2);
});

test("minStepsFib works on the number 1", () => {
  expect(minStepsFib(1)).toEqual(0);
});

test("minStepsFib works on the number 3", () => {
  expect(minStepsFib(3)).toEqual(0);
});

test("minStepsFib works on the number 13", () => {
  expect(minStepsFib(13)).toEqual(0);
});

test("minStepsFib works on the number 5000", () => {
  expect(minStepsFib(5000)).toEqual(819);
});

test("minStepsFib works on the number 1399", () => {
  expect(minStepsFib(1399)).toEqual(198);
});

test("minStepsFib works on the number 903202", () => {
  expect(minStepsFib(903202)).toEqual(71162);
});
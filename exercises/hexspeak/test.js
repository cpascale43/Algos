const hexspeak = require("./index");

test("function hexspeak exists", () => {
  expect(typeof hexspeak).toEqual("function");
});

test("hexspeak works on the number 257", () => {
  expect(hexspeak(257)).toEqual("IOI");
});

test("hexspeak works on the number 3", () => {
  expect(hexspeak(3)).toEqual("ERROR");
});

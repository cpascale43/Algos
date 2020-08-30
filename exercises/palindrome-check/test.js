const isPal = require("./index.js");

test("isPal function exists", () => {
  expect(typeof isPal).toEqual("function");
});

test('"!? 100 ABCcba 001 ?!" is a palindrome', () => {
  expect(isPal("!? 100 ABCcba 001 ?!")).toBeTruthy();
});

test('"raCecAr" is a palindrome', () => {
  expect(isPal("raCecAr")).toBeTruthy();
});

test('"racecar" is a palindrome', () => {
  expect(isPal("racecar")).toBeTruthy();
});

test('"car" is not a palindrome', () => {
  expect(isPal("car")).toBeFalsy();
});

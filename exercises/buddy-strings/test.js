const buddyStrings = require("./index.js");

test("buddyStrings function exists", () => {
  expect(typeof buddyStrings).toEqual("function");
});

test('"ab" and "ba" are buddy strings', () => {
  expect(buddyStrings("ab", "ba")).toBeTruthy();
});

test('"ab" and "ab" are not buddy strings', () => {
  expect(buddyStrings("ab", "ab")).toBeFalsy();
});

test('"aa" and "aa" are buddy strings', () => {
  expect(buddyStrings("aa", "aa")).toBeTruthy();
});

test('"aaaaaaabc" and "aaaaaaacb" are buddy strings', () => {
  expect(buddyStrings("aaaaaaabc", "aaaaaaacb")).toBeTruthy();
});

test('"" and "aa" are not buddy strings', () => {
  expect(buddyStrings("", "aa")).toBeFalsy();
});

const validAnagram = require("./index");

test("validAnagram function exists", () => {
  expect(typeof validAnagram).toEqual("function");
});

test("validAnagram works on empty strings", () => {
  expect(validAnagram("", "")).toEqual(true);
});

test("validAnagram works on cinema and iceman", () => {
  expect(validAnagram('cinema', 'iceman')).toEqual(true);
});

test("validAnagram works on aaz and zza", () => {
  expect(validAnagram("aaz", "zza")).toEqual(false);
});

test("validAnagram works on anagram and nagaram", () => {
  expect(validAnagram("anagram", "nagaram")).toEqual(true);
});

test("validAnagram works on rat and car", () => {
  expect(validAnagram("rat", "car")).toEqual(false);
});

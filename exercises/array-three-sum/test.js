const arrayThreeSum = require("./index");

test("function arrayThreeSum exists", () => {
  expect(typeof arrayThreeSum).toEqual("function");
});

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [12, 3, 1, 2, -6, 5, -8, 6];
  const summed = arrayThreeSum(arr, 0);

  expect(summed).toEqual([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
});

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [5, 6, 1, -9, 7, 3, 2];
  const summed = arrayThreeSum(arr, 35);

  expect(summed).toEqual([]);
});

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [1, 15, -5, 12, -3, 6, 2];
  const summed = arrayThreeSum(arr, 10);

  expect(summed).toEqual([[-3, 1, 12]]);
});

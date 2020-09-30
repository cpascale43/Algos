const search = require("./index");

test("search function exists", () => {
  expect(typeof search).toEqual("function");
});

test("if a value exists in the array, the search function returns its index", () => {
    expect(search([1,2,3,4,5,6], 4)).toEqual(3);
});

test("if a value exists in the array, the search function returns its index", () => {
    expect(search([1,2,3,5,6,8,9,12,15,16,29], 15)).toEqual(8);
});

test("if the value does not exist, the search function returns -1", () => {
  expect(search([1,2,3,4,5,6], 11)).toEqual(-1);
});

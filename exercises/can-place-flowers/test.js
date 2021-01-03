const canPlaceFlowers = require("./index");

test("function canPlaceFlowers exists", () => {
  expect(typeof canPlaceFlowers).toEqual("function");
});

test("canPlaceFlowers finds if n new flowers can be planted", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
});

test("canPlaceFlowers finds if n new flowers cannot be planted", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
});

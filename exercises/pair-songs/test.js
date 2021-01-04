const pairSongs = require("./index");
let time = [];

test("function pairSongs exists", () => {
  expect(typeof pairSongs).toEqual("function");
});

test("pairSongs works on 5 songs", () => {
  time = [30, 20, 150, 100, 40];
  expect(pairSongs(time)).toEqual(3);
});

test("pairSongs works on 3 songs", () => {
  time = [60, 60, 60];
  expect(pairSongs(time)).toEqual(3);
});

const isValid = require("./index");

test("isValid exists", () => {
  expect(typeof isValid).toEqual("function");
});

test("isValid works on skip and delete operations", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
    )
  ).toEqual(true);
});

test("isValid works on invalid skip and delete operations", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
    )
  ).toEqual(false);
});

test("isValid works on too many skip operations", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations.",
      '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
    )
  ).toEqual(false);
});

test("isValid works on a few valid operations in a row", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "We use operational transformations to keep everyone in a multiplayer repl in sync.",
      '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
    )
  ).toEqual(true);
});

test("isValid works on empty operations", () => {
  expect(
    isValid(
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
      "[]"
    )
  ).toEqual(true);
});

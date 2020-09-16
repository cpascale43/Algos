// --- Directions
// Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.
// Don’t worry if you’ve never heard of or worked with operational transformations before;
// there are many variants and we’re going to define our own simple operations right here.

// An operational transformation takes a document (you can think of it a string)
// plus a position within that document and either modifies the document at that position or skips to a new position.
// That’s it! Some examples:

// "", position 0, {"op": "insert", "chars": "Hello, human!"} ➡️ "Hello, human!", position 13
// "What is up?", position 7, {"op": "delete", "count": 3} ➡️ "What is?", position 7
// "Nice!", position 0, {"op": "skip", "count": 4}, {"op": "insert", "chars": " day"} ➡️ "Nice day!", position 9
// One thing to watch out for is that you can’t skip or delete past the end of the string.

// Now, back to keeping everyone in a multiplayer repl in sync.
// We often have to ask a client to catch up to the current state of the repl.
// When catching up, it’s important to validate that a sequence of operational transformations does indeed produce the most recent version of a file.
// You’re going to write the validation function. The function will take in a string for the stale file contents,
// a string containing the latest file contents, and a JSON string containing the operations. You may use any language! Here are some examples in JavaScript:

function isValid(stale, latest, otjson) {
  // this is the part you will write!
}

module.exports = isValid
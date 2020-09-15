// -- Directions
// Implement a function that accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers, but it will always be sorted.

// --- Examples
// [1, 1, 1, 1, 1, 2] => 2
// [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] => 7
// [] => 0
// [-2, -1, -1, 0, 1] => 4
// [1, 1, 1, 2, 3, 3, 4, 4, 5, 6] => 6

// Move j forward and leave i where it is, then do it again and compare while they're still the same
// update i only when we find two unique values that do not match
// If they are different, move i and increment by one
// Return i+1

function countUniqueValues(array) {
  if (!array.length) return 0;

  let first = 0;
  let second = 1;

  while (second < array.length) {
    if (array[first] !== array[second]) {
      first++;
      array[first] = array[second];
    }
    second++;
  }

  return first + 1;
}

module.exports = countUniqueValues;

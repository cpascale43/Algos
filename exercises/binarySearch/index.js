// --- Directions
// Given a sorted array of integers, write a function that accepts a value and returns the index
// where the value passed to the function is found. If the value is not found, return -1.

// --- Examples
// [1,2,3,4,5,6], 4 => 3
// [1,2,3,4,5,6], 6 => 5
// [1,2,3,4,5,6], 11 => -1

// pick a middle element - is the value greater than or less than the midpoint?
// then ignore the half accordingly
// repeat until you find the index, or you reach the end so you know it doesn't exist

const search = function (array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle]

    if (currentElement < val) {
        min = middle + 1;
    } else if (currentElement > val) {
        max = middle - 1;
    } else {
        return middle;
    }
  }

  return -1;
};

module.exports = search;

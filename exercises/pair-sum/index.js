// --- Directions
// Given an array arr consisting of N integers, sorted in ascending order (least to greatest),
// and a separate number (a sum), determine if any 2 numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum.
// Return false if no 2 numbers in the array add up to sum.

// --- Examples
// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false

// --- Edge Cases
// pairSum([1], 2) -> false
// pairSum([2], 2) -> false
// pairSum([], 1) -> false

function pairSum(arr, sum) {
  let min = 0;
  let max = arr.length - 1;

  // remove array duplicates
  arr = [...new Set(arr)];

  // check if the first element + the next element is greater than or equal to the sum
  // move the idx accordingly
  while (min < max) {
    let firstElement = arr[min];
    let nextElement = arr[max];

    if (firstElement + nextElement === sum) {
      return true;
    }

    if (firstElement + nextElement < sum) {
      min++;
    } else {
      max--;
    }
  }

  return false;
}

module.exports = pairSum;

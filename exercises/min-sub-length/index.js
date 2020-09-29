// -- Directions
// Implement a function that given an array of numbers and a positive integer N,
// returns the minimal length of a contiguous subarray of which the sum is greater than
// or equal to N. If there isn't one, return 0.

// --- Examples
// [2,3,1,2,4,3], 7 => 2 because [4,3]
// [2,1,6,5,4], 9 => 2 because [5,4]
// [3,1,7,11,2,9,8,21,62,33,19], 52 => 1 because 62 > 52
// [1,4,16,22,5,7,8,9,10], 39 => 3
// [1,4,16,22,5,7,8,9,10], 55 => 5
// [4,3,3,8,1,2,3], 11 => 2
// [1,4,16,22,5,7,8,9,10], 95 => 0

function minSubLen(array, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    // if current window doesn't add up to the given sum
    // move the window to the right
    if (total < sum && end < array.length) {
      total += array[end];
      end++;
    }

    // if current window adds up to at least the sum given
    // shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    }

    // if current total is less than the given sum but we reach the end,
    // return
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubLen;

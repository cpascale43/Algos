// -- Directions
// Implement a function that given an array of numbers and a number N,
// finds the largest sum of N consecutive numbers

// --- Examples
// [1, 2, 5, 2, 8, 1, 5], 2 => 10
// [1,2,5,2,8,1,5], 4 => 17
// [4,2,1,6], 1 => 6
// [4, 2, 1, 6, 2], 4 => 13
// [], 4 => null

// create a sum that goes from starting point to n,
// move the window up by subtracting the next index
// starting at num to end of the array, add one and subtract the number at i-num
// Math.max
function maxSubSum(array, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

module.exports = maxSubSum;

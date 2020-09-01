// --- Directions
// For each matrix of NXN integers, a matrix is valid if its rows and columns contain 1...N
// If not, it's invalid

// --- Examples
// const arr1 = [
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// INVALID;

// const arr2 = [
//   [1, 2, 3, 4],
//   [2, 3, 4, 1],
//   [3, 4, 1, 2],
//   [4, 1, 2, 3],
// ];
// VALID;

// const arr3 = [
//   [1, 1, 1, 1],
//   [2, 2, 2, 2],
//   [3, 3, 3, 3],
//   [4, 4, 4, 4],
// ];
// INVALID;

// const arr4 = [
//   [3, 2, 3, 2],
//   [2, 3, 2, 3],
//   [3, 2, 3, 2],
//   [2, 3, 2, 3],
// ];
// INVALID;

// const arr5 = [
//   [-1, -3, -2],
//   [-2, -1, -3],
//   [-3, -2, -1],
// ];
// VALID

function doArraysMatch(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.sort().every(function (value, index) {
      return value === array2.sort()[index];
    })
  );
}

function sudokuChecker(matrix) {
  if (!matrix.length) {
    return "INVALID";
  }

  let N = matrix[0].length;
  let availableNumbers = Array.from(Array(N), (_, i) => i + 1);

  // columns
  for (let i = 0; i < matrix.length; i++) {
    let currentColArray = [];
    for (let j = 0; j < N; j++) {
      currentColArray.push(matrix[j][i]);
    }
    let colResult = doArraysMatch(availableNumbers, currentColArray);
    if (!colResult) {
      return "INVALID";
    }
  }

  // rows
  for (let i = 0; i < matrix.length; i++) {
    let currentRowArray = [];
    for (let j = 0; j < N; j++) {
      currentRowArray.push(matrix[i][j]);
    }
    let rowResult = doArraysMatch(availableNumbers, currentRowArray);
    if (!rowResult) {
      return "INVALID";
    }
  }

  return "VALID";
}

module.exports = sudokuChecker;

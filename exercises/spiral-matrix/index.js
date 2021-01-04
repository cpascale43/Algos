// --- Directions
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const spiralMatrix = (n) => {
  let results = [];

  // initialize an empty array for each n
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // keep track of the number to push into results
  let count = 1;

  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = count;
      count++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = count;
      count++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = count;
      count++;
    }
    endRow--;

    // left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = count;
      count++;
    }
    startCol++;
  }

  return results;
};

module.exports = spiralMatrix;

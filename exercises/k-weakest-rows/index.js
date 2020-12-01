// --- Directions
// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
// return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
// or they have the same number of soldiers but i is less than j.
// Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

// --- Examples
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]

// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]

// binary search to counts 1s in each row
// sort in ascending order OR i < j
// save indexes to new result array of length k

const searchForOnes = (arr, left, right) => {
  if (left === right) return left;
  const mid = Math.floor((left + right) / 2);
  return arr[mid] === 0
    ? searchForOnes(arr, left, mid)
    : searchForOnes(arr, mid + 1, right);
};

function kWeakestRows(mat, k) {
  const n = mat.length;
  const m = mat[0].length;
  const rows = [];
  const res = new Array(k);

  // extracts number of ones from each row and current row index
  for (let i = 0; i < m; i++) {
    rows.push([searchForOnes(mat[i], 0, n), i]);
  }

  // sorts rows by number of soldiers in ascending order
  // or if i is less than j
  rows.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  // extracts only k indexes from rows
  for (let i = 0; i < k; i++) {
    res[i] = rows[i][1];
  }

  return res;
}

module.exports = kWeakestRows;

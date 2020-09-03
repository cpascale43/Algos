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

function kWeakestRows(mat, k) {

}

module.exports = kWeakestRows;

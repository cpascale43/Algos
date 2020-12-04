// --- Directions
// There is a box with a capacity of 5000 grams. The box may already contain some items
// reducing its capacity. You'll be adding apples to the box until it's full.
// Given a zero indexed array A consisting of N integers, representing the weight
// of items already in the box and each apple's weight, return the maximum number of
// apples that could fit in the box.
// A contains between 1 and 100 applies and the numbers are between 0 and 5000.
// A consists of K, the first element representing the sum of the weight of the items
// already in the box followed by 0 or more integers representing individual apple weights.

// --- Examples
// [4650, 150, 150, 150] => 2 (two apples of weight 150g each)
// [4850, 100, 30, 30, 100, 50, 100] => 3 (two 30g apples and one 50g)

function appleBox(A) {
  const capacity = 5000;
  let currentWeight = A[0];
  let apples = A.slice(1);
  let numOfApples = 0;

  // sort apples from lightest to heaviest
  apples = apples.sort((a, b) => a - b);
  let lightest = 0;

  // add from the front to add max # of apples
  while (currentWeight <= capacity) {
    currentWeight += apples[lightest];
    lightest++;
    numOfApples++;
  }

  return numOfApples - 1;
}

module.exports = appleBox;

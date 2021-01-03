// --- Directions
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n,
// return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// [1,0,0,0,1]
// no adjacent flowers rule = wherever you put n flowers, must have a 0 on left and right side
// if there are at least two more zeros than n, you can plant n flowers

const canPlaceFlowers = (flowerbed, n) => {
  let sum = 0;

  flowerbed.map((x, i) => {
    if (!flowerbed[i - 1] && !x && !flowerbed[i + 1]) {
      sum++;
      flowerbed[i] = 1;
    }
  });

  return n <= sum;
};

module.exports = canPlaceFlowers;

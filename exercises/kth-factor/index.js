// --- Directions
// Given two positive integers n and k.
// A factor of an integer n is defined as an integer i where n % i == 0.
// Consider a list of all factors of n sorted in ascending order,
// return the kth factor in this list or return -1 if n has less than k factors.

// calculate the factors of n and return in sorted ascending order
const calculateFactors = (n) => {
  return Array.from(Array(n + 1), (_, i) => i).filter((i) => n % i === 0);
};

const findKthElement = (factors, k) => {
  if (factors.length < k) {
    return -1;
  }

  return factors[k - 1];
};

const kthFactor = (n, k) => {
  let factors = calculateFactors(n);

  let result = findKthElement(factors, k);

  return result;
};

module.exports = kthFactor;

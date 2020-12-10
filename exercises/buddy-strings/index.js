// --- Directions
// Given two strings A and B of lowercase letters, return true
// if you can swap two letters in A so the result is equal to B, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed)
// such that i != j and swapping the characters at A[i] and A[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// --- Examples
// buddyStrings('ab','ba') => true
// buddyStrings('ab','ab') => false
// buddyStrings('aa','aa') => true
// buddyStrings('aaaaaaabc','aaaaaaacb') => true
// buddyStrings('','aa') => false

const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;

  if (A == B) {
    let s = new Set();

    for (let i = 0; i < A.length; i++) {
      s.add(A.charAt(i));
    }

    return s.size < A.length;
  }

  let diff = [];

  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) !== B.charAt(i)) {
      diff.push(i);
    }
  }

  return (
    diff.length == 2 &&
    A.charAt(diff[0]) == B.charAt(diff[1]) &&
    A.charAt(diff[1]) == B.charAt(diff[0])
  );
};

module.exports = buddyStrings;

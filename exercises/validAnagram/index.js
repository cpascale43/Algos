// --- Directions
// Given 2 strings, write a function to determine if the second string is an anagram of the first.
// Lowercase letters, always one word each.

// --- Examples
// cinema, iceman => true
// '','' => true
// 'aaz', 'zza' => false

function validAnagram(str1, str2) {
  const frequencyCounterOne = {};
  const frequencyCounterTwo = {};

  for (let char of str1) {
    frequencyCounterOne[char]
      ? frequencyCounterOne[char]++
      : (frequencyCounterOne[char] = 1);
  }

  for (let char of str2) {
    frequencyCounterTwo[char]
      ? frequencyCounterTwo[char]++
      : (frequencyCounterTwo[char] = 1);
  }

  for (let key in frequencyCounterOne) {
    if (key in frequencyCounterTwo) {
      if (frequencyCounterOne[key] !== frequencyCounterTwo[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = validAnagram;

// --- Directions
// Given 2 strings, write a function to determine if the second string is an anagram of the first.
// Lowercase letters, always one word each.

// --- Examples
// cinema, iceman => true
// '','' => true
// 'aaz', 'zza' => false

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let char of str1) {
    lookup[char]
      ? lookup[char]++
      : (lookup[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

module.exports = validAnagram;

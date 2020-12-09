// --- Directions
// Given a string str, create a function that returns a boolean, corresponding to
// whether that string is a palindrome. Should be case-insensitive.

// --- Examples
// isPal('car') => false
// isPal('racecar') => true
// isPal('raCecAr') => true
// isPal('!? 100 ABCcba 001 ?!') => true

function isPal(str) {
  return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
}

module.exports = isPal;

// --- Directions
// Write a function that given a string S encoding a decimal integer N,
// returns a string representing the Hexspeak representation H of N,
// if H is a valid Hexspeak word. Otherwise, it should return "ERROR".

// A decimal number can be converted to Hexspeak by first converting it to
// hexadecimal, then converting the number 0 to the letter "O" and the number 1
// to the letter "I". A string is considered a valid Hexspeak word if it consists
// of only the ABCDEFIO letters. All answers should be uppercase.

// --- Examples
// '257' -> 'IOI'
// '3' => "ERROR"

// convert to hex
// check if hex value is in the set of available values
// if yes, convert
// else return 'ERROR'

const HEXVALS = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
  1: "I",
  0: "O",
};

const convertToHex = (n) => {
  return n.toString(16).toUpperCase();
};

const calculateCharacter = (char, n) => {
  if (HEXVALS[char]) {
    return HEXVALS[char];
  } else if (Object.values(HEXVALS).includes(char)) {
    return char;
  } else if (Object.keys(HEXVALS).includes(char)) {
    return char;
  } else return "ERROR";
};

const hexspeak = (n) => {
  n = convertToHex(Number(n));
  let res = "";
  for (let char of n) {
    res += calculateCharacter(char, n);
  }
  return res;
};

module.exports = hexspeak;

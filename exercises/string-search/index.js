// --- Directions
// You are attempting to find the index of the first appearance of one string inside of another.

// indexOf('or', 'hello world') => 7
// indexOf('hello world', 'or') => -1
// indexOf('howdy', 'hello world') => -1
// 'indexOf('oox', 'ooboxoooxo') => 6

function indexOf(str1, str2) {
  let end = str1.length;

  for (let i = 0; i < str2.length; i++) {
    if (str2.slice(i, end) === str1) {
      return i;
    }
    end++;
  }

  return -1;
}

module.exports = indexOf;

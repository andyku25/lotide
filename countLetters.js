const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1
    }
  }
  return result;
};

module.exports = countLetters;
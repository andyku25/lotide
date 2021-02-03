const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

results = countLetters("lighthouse in the house");

assertEqual(results.l, 1);
assertEqual(results.i, 2);
assertEqual(results.g, 1);
assertEqual(results.h, 4);
assertEqual(results.t, 2);
assertEqual(results.o, 2);
assertEqual(results.u, 2);
assertEqual(results.s, 2);
assertEqual(results.e, 3);
assertEqual(results.n, 1);
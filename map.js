// AssertArraysEqual Function
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(callback(item)); 
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t" ])


const results2 = map(words, word => word[1]);
console.log(results2);
assertArraysEqual(results2, ["r", "o", "o", "a", "o" ])


const results3 = map(words, word => word.length);
console.log(results3);
assertArraysEqual(results3, [6, 7, 2, 5, 3 ])

module.exports = map;
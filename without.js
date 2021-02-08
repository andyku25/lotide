// Check to see if 2 arrays are equal
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
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

const without = function (array1, itemsToRemove) {
  const results = [...array1]; // Spread syntax instead of .slice()
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (array1.includes(itemsToRemove[i])) {
      // Create a count if to find total number of matches in the array
      const matchCount = array1.filter(array1Item => array1Item === itemsToRemove[i]).length;
      // remove the matched values from the array
      results.splice(array1.indexOf(itemsToRemove[i]), matchCount);
    }
  }
  return results;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

console.log(without([1, 2, 4], [2]));
console.log(without([1, 2, 2, 4], [2]));
console.log(without([1, 2, "2", 4], [2]));



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
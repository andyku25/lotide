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

// Find the middle array value(s)
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  // Even array lengths, return middle 2 array values
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

// Test middle function

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1 ,2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
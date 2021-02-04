// Checks to see if 2 Arrays are equal
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

// Checks to see if 2 Objects are equal
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);  
  // 1) Check the length of the keys
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          continue;
        } else {
          return false;
        }
      } else {
        // 2) Check the values of each key to see if they match
        if (object1[key] === object2[key]) {
        } else {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// Console the assertion pass or fail message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false
assertObjectsEqual(cd, dc); // true
assertObjectsEqual(cd, cd2); // false
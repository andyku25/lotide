const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// return true if both objects 1) have the same number of keys. 
//                             2) have the same values for the same keys
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);  
  // 1) Check the length of the keys
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      // 2) Check the values of each key to see if they match
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

eqObjects(ab, ba);
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);
assertEqual(eqObjects(ab, abc), false);
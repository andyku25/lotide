const eqArrays = require("./eqArrays");

// return true if both objects 1) have the same number of keys. 
//                             2) have the same values for the same keys
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

module.exports = eqObjects;
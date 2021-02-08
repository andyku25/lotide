const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(dataSet, valueSeach) {
  // for In solution
  for (const data in dataSet) {
    if (dataSet[data] === valueSeach) {
      return data;
    }
  }

  // For of solution
  // for (const data of Object.keys(dataSet)) {
  //   if (dataSet[data] === valueSeach) {
  //     return data;
  //   }
  // }
  
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:"The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
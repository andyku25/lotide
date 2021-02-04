// assertEqual check function 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Find the key
const findKey = (object1, callback) => {
  // Iterate through all the key pairs to check if the key's object matches the callback 
  for (const key of Object.keys(object1)) {
    if (callback(object1[key])) {
      return key;
    }
  }
  return undefined;
};

// TEST
const result = findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Oral": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2) // => "noma"

// assertEqual Check
assertEqual(result, "noma");
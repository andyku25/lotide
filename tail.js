// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length < 2) {
    return [];
  } else {
    return array.slice(1);
  }
};

// Test original
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail(words));

// Test array
for (let i = 0; i < tail(words).length; i++) {
  assertEqual(tail(words)[i], words[i + 1]);
}
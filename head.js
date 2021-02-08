// Import assertEqual
const assertEqual = require("./assertEqual");


const head = function(array) {
  if (array.length < 1) {
    return undefined;
  } else {
    return array[0];
  }
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
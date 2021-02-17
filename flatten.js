const assertArraysEqual = require("./assertArraysEqual")
const { eqArrays } = require("./index");

const flatten = (arr) => {
  const output = [];
  arr.forEach(element => {
    if(Array.isArray(element)) {
      output.push(...flatten(element));
    } else {
      output.push(element);
    }
  });
  return output;
};

test = [1, 2, [3, 4], 5, [6]];

console.log(flatten(test));
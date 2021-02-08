// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it("returns [6, 7, 2, 5, 3] when passed value ['ground', 'control', 'to', 'major', 'tom'] in array param", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
});
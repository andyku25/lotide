// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns {h: [0], e: [1], l: [2,3], o: [4]} when passed value of 'hello' in sentence param", () => {
    assert.deepEqual(letterPositions("hello"), {h: [0], e: [1], l: [2,3], o: [4]});
  });
});
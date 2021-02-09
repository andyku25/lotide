// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true when passed 2 arrays that are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when passed 2 arrays that are not equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2,"3"]), false);
  });
});


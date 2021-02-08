// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("return [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
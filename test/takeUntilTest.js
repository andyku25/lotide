// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] when passed array of [1, 2, 5, 7, 2, -1, 2, 4, 5] such that the iteration doesnot fall below 0", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
});
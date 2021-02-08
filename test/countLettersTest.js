const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns 1 when passed 'lighthouse in the house' for 'l'", () => {
    const results = countLetters("lighthouse in the house");
    assert.strictEqual(results.l, 1);
  });
  it("returns 2 when passed 'lighthouse in the house' for 'i'", () => {
    const results = countLetters("lighthouse in the house");
    assert.strictEqual(results.i, 2);
  });
  it("returns 3 when passed 'lighthouse in the house' for 'e'", () => {
    const results = countLetters("lighthouse in the house");
    assert.strictEqual(results.e, 3);
  });
  it("returns 4 when passed 'lighthouse in the house' for 'h'", () => {
    const results = countLetters("lighthouse in the house");
    assert.strictEqual(results.h, 4);
  });
});
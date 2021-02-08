// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns 'drama' when passed value of 'The Wire' in bestTVShowsByGenre dataset", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:"The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when passed value that doesn't exist in bestTVShowsByGenre dataset", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:"The Wire"
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "Friends"));
  });
});
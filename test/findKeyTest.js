// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#middle", () => {
  it("returns the first key 'noma' when passed a object and cb of star counts", () => {
    const result = findKey({
      "Blue Hill": {stars: 1},
      "Akaleri": {stars: 3},
      "noma": {stars: 2},
      "elBulli": {stars: 3},
      "Oral": {stars: 2},
      "Akelarre": {stars: 3}
    }, x => x.stars === 2)
    assert.strictEqual(result, "noma");
  });
});
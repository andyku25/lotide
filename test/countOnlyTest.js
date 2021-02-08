const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns 1 when passed a list of first names including 'Jason' when looking for is true", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(results["Jason"], 1);
  });
  it("returns 2 when passed a list of first names including 'Agouhanna' when looking for is false", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(results["Agouhanna"], undefined);
  });
  it("returns undefined when passed a list of first names including 'Karima' when looking for is true but doesn't exist in list", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(results["Karima"], undefined);
  });
});
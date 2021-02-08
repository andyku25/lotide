// TESTING WITH MOCHA/CHAI
const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns ['hello', 'lighthouse'] when passed value of ['hello', 'world', 'lighthouse'], and to remove ['world']", () => {
    
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["world"]), ["hello", "lighthouse"]);
  });
});
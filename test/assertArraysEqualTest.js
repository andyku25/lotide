const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // TRUE
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // TRUE
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FALSE
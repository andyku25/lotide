const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test array
const words = ["Yo Yo", "Lighthouse", "Labs"];
for (let i = 0; i < tail(words).length; i++) {
  assertEqual(tail(words)[i], words[i + 1]);
}

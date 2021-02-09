// Find the middle array value(s)
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  // Even array lengths, return middle 2 array values
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

module.exports = middle;
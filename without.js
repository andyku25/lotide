const without = function (array1, itemsToRemove) {
  const results = [...array1]; // Spread syntax instead of .slice()
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (array1.includes(itemsToRemove[i])) {
      // Create a count if to find total number of matches in the array
      const matchCount = array1.filter(array1Item => array1Item === itemsToRemove[i]).length;
      // remove the matched values from the array
      results.splice(array1.indexOf(itemsToRemove[i]), matchCount);
    }
  }
  return results;
};

module.exports = without;
// takeUntil function
const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) { // Cannot use forEach because you cannot exit out of the loop early with return
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;
const findKeyByValue = function(dataSet, valueSeach) {
  // for In solution
  for (const data in dataSet) {
    if (dataSet[data] === valueSeach) {
      return data;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
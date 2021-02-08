// Find the key
const findKey = (object1, callback) => {
  // Iterate through all the key pairs to check if the key's object matches the callback 
  for (const key of Object.keys(object1)) {
    if (callback(object1[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
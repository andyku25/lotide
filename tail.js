const tail = function(array) {
  if (array.length < 2) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;
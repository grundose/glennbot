exports.randomArrayValue = function (arr) {
  if (Array.isArray(arr)) {
    return arr[Math.floor(Math.random() * (Math.floor(arr.length - 1)))];
  }
};

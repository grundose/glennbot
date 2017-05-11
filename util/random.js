exports.randomArrayValue = function (arr) {
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      return arr[Math.floor(Math.random() * (Math.floor(arr.length - 1)))];
    }
	return "Balls";
  }

  // Default response
  return "Balls";
};

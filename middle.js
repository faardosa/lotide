const eqArrays = function (arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("true");
  } else {
    console.log("false");
  }
};

const middle = function (array) {
  if (array.length < 2) return []
  const result = [];
  const middle = Math.floor(array.length / 2);

  // console.log("middle", middle)
  if (array.length % 2 !== 0) {
    result.push(array[middle]);
  } else {
    result.push(array[middle - 1]);
  }
  return result;
};

module.exports = middle;

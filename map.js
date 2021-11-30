const eqArrays = function (arr1,arr2) {
  for (i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
    return false
  } return true
}
const assertArrayEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("true")
  } else {
    console.log("false")
  }
}

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};
module.exports = map
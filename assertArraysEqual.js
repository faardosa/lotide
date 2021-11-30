const assertArrayEqual = require('../eqArrays');

const assertArrayEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("true")
  } else {
    console.log("false")
  }
}
module.exports = assertArrayEqual;
const eqArrays = function (arr1,arr2) {
  for (i=0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
    return false
  } return true
}
const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("true")
  } else {
    console.log("false")
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i]
 
      }
    
  }

  return results;
};
console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").e, [1]);
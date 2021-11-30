const without = function (arr1,arr2) {
   const withoutArr = []
   //const lengthOfArr = 0
   let shortArr;
   let longArr;

   if (arr1.length > arr2.length) {
    // lengthOfArr = arr2.length
    longArr = arr1 
    shortArr = arr2
   } else {
     longArr = arr2 
     shortArr = arr1
    // lengthOfArr = arr1.length
   } 
   //console.log(longArr, shortArr)
   longArr.forEach((item) => {
     //console.log(typeof(item))
     if (!(shortArr.includes(item))){
       withoutArr.push(item)
     
     }
   })
 return withoutArr;


}
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

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

module.exports = without

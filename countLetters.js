const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};
 


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



const countLetters =  function(str) {
  let characterArray = []
  for (const value of str) {
    if (!characterArray.includes(value)) {
      characterArray.push(value) 
      console.log(value + " : " + countLetter(str,value))
    } 
  
  }
}
const countLetter = function(str,char){
  let counter = 0
  for (const value of str) {
    if (value === char) {
      counter++
    }
  } 
  return counter
}
countLetters("letters")

module.exports = countLetters
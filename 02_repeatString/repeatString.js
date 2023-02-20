

function repeatString(string, num) {
  if (num < 0) {
    return "ERROR";
  }
    let baseString ="";
    while (num > 0){
      baseString += string;
      num--;
    }
    return baseString;

};


let stringThree = repeatString("hey", 3);
let stringTen = repeatString("hey", 10);
let stringOne = repeatString("hey", 1);
let stringZero = repeatString("hey", 0);
let stringMinusOne = repeatString("hey", -1);
let stringRandom = repeatString("hey", Math.floor(Math.random() * 30));
let stringBlank = repeatString ("", 10);







// Do not edit below this line
module.exports = repeatString;

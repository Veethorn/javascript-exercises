function reverseString (string) { 
    return string.split("").reverse().join().replace(/,/g,"");
   }
   

 let x = reverseString ("hello");

 let y = reverseString ("hello there");

 let z = reverseString ("123! abc!");

 let w = reverseString ("");

/*   let stringOne = reverseString("hello");
   let stringSplit = stringOne.split("");
   let stringReverse = stringSplit.reverse();
   let stringJoin = stringReverse.join();
   let stringFull = stringJoin.replace(/,/g,""); */

// Do not edit below this line
module.exports = reverseString;

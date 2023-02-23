//Write a function called add7 that takes one number and returns that number + 7.
function add7(num) {
  return num + 7;
}
console.log(add7(3));

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

/*Write a function called capitalize that takes a string and returns that string with 
only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.*/
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("the Word"));

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"
function lastLetter(string) {
  return string.slice(-1);
}
console.log(lastLetter("abcd"));

/* FizzBuzz
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number */

let answer = parseInt(prompt("Type a number!"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    }
  } else {
    if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

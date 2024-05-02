// Conversion
let marks = 90;
console.log(typeof marks);
 let nString = String(marks);
 console.log(typeof nString);

let name = "Shailesh";
console.log(typeof name);
 let valueInNumber = Number(name);
 console.log(valueInNumber); 
// NaN alpha to number is not possible

let that = 0;
let booleanThat = Boolean(that);
console.log(booleanThat);
// 1 => true; 0 => false
// "" => false
// "Shailesh" => true


// Operations
let value = 3;
let neg = -value;
console.log(neg, ",", value);

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(3 + 2 * 1);
// dont write code like this

console.log(true);
console.log(+true); // output : 1; dont write code like this
console.log(+""); // output : 0;
// console.log(true+); // not applicable
// bad practice

let score = 100; //102
let changeScore = ++score; //101
let chngScr = score++; //101
// console.log(score);
// console.log(score , changeScore);
// console.log(score , chngScr);
console.log(score , chngScr , changeScore);

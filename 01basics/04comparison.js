console.log(2 > 1); 
console.log("2" > 1); // it compairs strings with numbers 
console.log(2 > "1");


// equality check == and comparisons  < > >= <= works differently
// comparison converts the null to a number and treats as 0
// that why null >= 0 is TRUE; null > 0 is FALSE : watch below

console.log(null > 0); // '>' converts null to number, treats as 0 but 0 > 0 thats why it is false
console.log(null >= 0); // '>' converts null to number, treats as 0 thats why 0 = 0 is true
console.log(null <= 0);
console.log(null < 0);
console.log(null == 0); // '=' also 

console.log(undefined == 0); // result will be always false with each comparison

// === strict check; compair datatpes also. 
console.log(2 === 2)
console.log(2 === "2");

// clean code have a CSSMathValue, avoid these types of code. 
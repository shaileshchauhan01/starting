// const score = 100;
 
// const myScore = new Number(500);
// console.log(myScore); // [Number: 500]

// console.log(myScore.toString()); // 500
// console.log(myScore.toString().length); // 3
// console.log(myScore.toFixed(2)); // 500.00

// let otherNum = 122.986
// console.log(otherNum); 
// console.log(otherNum.toPrecision(5)); // 4: 123.0; 5: 122.99

// const anotherNumber = 10000000;
// console.log(anotherNumber.toLocaleString()); // 10,000,000
// console.log(anotherNumber.toLocaleString('en-IN')); // 1,00,00,000


// MATHS
// console.log(Math);
// console.log(Math.abs(-4)); // converts -ve value to +ve
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.min(4, 6, 7, 9, 1));
// console.log(Math.max(4, 6, 7, 9, 1));

// console.log(Math.random()); // value b/w 0 and 1
// console.log((Math.random()*10) + 1 );
// console.log(Math.floor(Math.random()*10) + 1 );

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
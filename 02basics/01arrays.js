//Array : Array is an object, storing a collection of multiple items under a single variable name.

// Copy Operations creats Shallow copies (HEAP memory - share refrence : change in original data) rather than Deep copies (STACK memory). 

let array = [2,3,4,5,6,7,8];
let names = ["Shailesh", 'Anku'];

console.log(typeof array);

console.log(array);
console.log(names[0]); // indexing starts from 0

let myArr = new Array(1,2,3,4,5); // [] are not used here

console.log(myArr);


// Array Methods

names.push("Chauhan");
console.log(names);

names.pop();
console.log(names);

array.unshift(0, 1);
console.log(array);

array.shift();
console.log(array);

console.log(array.includes(10));
console.log(array.indexOf(5));

console.log(array);

let newArray = array.join(); // onject into string

console.log(array);
console.log(newArray);


// SLICE 

console.log("A before ", array); 

const slice = array.slice(1, 4); // shows the result as demanded excluded last one.
console.log("slice ", slice);

console.log("A after ", array);

// SPLICE 

console.log("B before ", array);

const splice = array.splice(1,4); // manupliulates the original data included 4 or last one.
console.log("splice ", splice);

console.log("B after", array);



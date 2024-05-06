const name = "Shailesh";
const myAge = 21;
console.log(`Hii, I am ${name} and I am ${myAge} years old.`);


let lastName = new String("Chauhan-ch"); // Specified
console.log(lastName); // [String: 'Chauhan-ch']
console.log(`Hey, my name is ${name} ${lastName} and I am ${myAge} years old.`);

console.log(name.length);
console.log(name.__proto__);
console.log(lastName.toUpperCase());
console.log(name.charAt(3));
console.log(lastName.indexOf('u'));

//substring
const newString = lastName.substring(0,4); // 'Chau' 0-4 char
console.log(newString);

//slice
const anotherString = lastName.slice(-8,4); // if we know the length then we can also give -ve values.
console.log(anotherString);

//trim
const newStringOne = "   newname    ";
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://shailesh%20chauhan.com";
console.log(url.replace("%20","-"));

//includes
console.log(url.includes("anku"));

//split
console.log(lastName.split('-'));
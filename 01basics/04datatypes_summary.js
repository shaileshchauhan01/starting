// Javascript is a dynamic typed of language and it’s your responsibility to take care of variable types.


// Two types of datatypes: Kis tarah se data ko memory me rakha jata hai or access kia jata hai.

// Primitive: 7 types
// - String
// - Number
// - Boolean
// - Null = khaali
    const temp = null; //object

// - Undefined 
    let userEmail; 

// - Symbol = use to make unique values
    const id = Symbol('123'); 
    const anId = Symbol('123');
    // console.log(id === anId);

// - BigInt = scientic values or big value which are not handable used in BigInt
    const bigNumber = 120938475653728647n;


// Reference/Non-Primitive: 3 types
// - Array
    let names = ["Shailesh", "Anku"];
    // console.log(names);

// - Objects
    let myObj = {
        name : "Shailesh",
        age : 21
    }
    // console.log(myObj);
// - Functions

    let myFunc = function (){
        console.log("Hello World");
    }

// Browser events / web events & Objects : enough to master the JS

console.log(typeof temp, id, bigNumber);
console.log(typeof names);
console.log(typeof myObj);
console.log(typeof myFunc);

// The typeof reference : https://tc39.es/ecma262/#sec-typeof-operator
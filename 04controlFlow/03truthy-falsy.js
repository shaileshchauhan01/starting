// Falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN 

// Truthy values 
// true, "0", 'false', " ", [], {}, function(){}   and rest


const userEmail = "0";
if(userEmail){
    console.log("Got the user Email");
} else {
    console.log("Don't have user Email")
}

const emptyArray = [];
if(emptyArray.length == 0){
    console.log("Array is empty");
}

const emptyObject = {};
if(Object.keys(emptyObject).length == 0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 20;
val1 = undefined ?? 30;
val1 = null ?? undefined ?? 40 ?? 50;

console.log(val1);


// Terniary Operator
// condition ? true : false

const coldCoffeePrice = 120;
coldCoffeePrice <= 100 ? console.log("less than 100") : console.log("more than 100")
// function sayMyName(){
//     console.log("SH")
//     console.log("AI")
//     console.log("LE")
//     console.log("SH")
// }

// // sayMyName                 // its a reference of name/value
// sayMyName()                  // with paranthese it will result will value


// function addTwoNumbers(number1, number2) {       //parameters (number1, number2)
//     console.log(number1 + number2);
// }
// addTwoNumbers(1, 8) // arguments(1, 8)


// function addTwoNumbers(number1, number2) { 
//     let result = number1 + number2;
//     return result;
// }
// const result = addTwoNumbers(1, 8)
// console.log(`Result : ${result}`)


// // function addTwoNumbers(number1, number2) { 
// //     return  number1 + number2;
// // }


// function loginUser(username){
//     if(!username){                               // if user did not add any username
//         console.log("Please enter username")     // we can also give default username as shown below
//         return                                   // stops executing return value
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser())


// function loginUser(username = "Anku"){      // if username will given then default value over writes
//     return `${username} just logged in`
// }
// console.log(loginUser())


// function calculatePrice(val1, val2, ...num1) {// ... rest operator
//     return num1;
// }
// console.log(calculatePrice(100, 500, 280, 776));

const user = {
    usernames: "Shailesh",
    age: 21
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
    username : "Shaileshhh",
    age : 211
})


const myNewArray = [200, 400, 600]
function returnValue(getArray){
    return getArray[2]
}
// console.log(returnValue(myNewArray));
console.log(returnValue([100, 200 ,300]));

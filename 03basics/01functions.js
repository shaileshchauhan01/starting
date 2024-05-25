function sayMyName(){
    console.log("SH")
    console.log("AI")
    console.log("LE")
    console.log("SH")
}

// sayMyName                 // its a reference of name/value
sayMyName()                  // with paranthese it will result will value


function addTwoNumbers(number1, number2) {          //parameters (number1, number2)
    console.log(number1 + number2);
}
addTwoNumbers(1, 8)                                 // arguments(1, 8)


function addTwoNumbers(number1, number2) { 
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(1, 8)
console.log(`Result : ${result}`)


function addTwoNumbers(number1, number2) { 
    return  number1 + number2;
}
console.log(addTwoNumbers(1,5))

function loginUser(username){
    if(!username){                                   // if user did not add any username
                                                     // another syntax : if(username === undefiend){}                    
        console.log("Please enter username")         // we can also give default username as shown below
        return                                       // stops executing return value, it dosn't allow to run furthur code
    }
    return `${username} just logged in`
}
console.log(loginUser())


function loginUser(username = "Anku"){                    // default username for safety pupose, if username will given by user then that value overwrites
    return `${username} just logged in`
}
console.log(loginUser())



function calculatePrice(val1, val2, ...num1) {              // ... rest operator
    return num1;
}
console.log(calculatePrice(100, 500, 280, 776));            // output: 280, 776, bcz only num1 returned


const user = {
    username: "Shailesh",
    age: 21
}

function handleObject(anyObject){                            // (anyObject) so that we can we pass not only this object buy any object in this
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user)                                       // result
handleObject({                                              // we can also pass direct object like this            
    username : "Shaileshhh",
    age : 211
})


const myNewArray = [200, 400, 600]
function returnValue(getArray){
    return getArray[2]
}
// console.log(returnValue(myNewArray));
console.log(returnValue([100, 200 ,300]));                  // we can also pass direct array like this            

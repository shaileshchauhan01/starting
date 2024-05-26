const user = {
    username : "Shailesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, you have to pay Rs.${this.price} to access this program.`);
        console.log(this);              // print current context
    }
}
user.welcomeMessage()

user.price = 699
user.welcomeMessage()

console.log(this);                      // {} empty object / in console or browser : global object is "window"


function juice(){
    let username = "Shailesh"
    console.log(this.username)
}

juice()

const juice = function (){
    let username = "Shailesh"
    console.log(this.username)
}

juice()

const juice = () => {
    let username = "Shailesh"
    // console.log(this.username)
    console.log(this);
}

juice()


// Arrow function : () => {}/()

// const addTwo = (num1, num2) => { return num1 + num2}        
// const addTwo = (num1, num2) => (num1 + num2)        
const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ({username : "Shailesh"})         // Object 
console.log(addTwo(2,7));

const myArray = [2,5,3,7,9]
// myArray.forEach function() {}
myArray.forEach( () => {} )



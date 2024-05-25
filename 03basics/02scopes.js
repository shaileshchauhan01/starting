// {}          // => Scopes
//             // checking scopes in console and node is Different

// let a = 10;         // Block Scope 
// const b = 20;       // Block Scope
// var c = 30;         // Global Scope

// if(true){
//     let a = 100;
//     console.log(`Inner let: ${a}`)
// }
// console.log(`Outer let: ${a}`)

// if(true){
//     const b = 100;
//     console.log(`Inner const: ${b}`)
// }
// console.log(`Outer const: ${b}`)

// if(true){
//     var c = 100;
//     console.log(`Inner var: ${c}`)
// }
// console.log(`Outer var: ${c}`)


function one(){
    const username = "Shailesh"

    function two(){
        const  userage = 21;
        let userwork = "study";
        console.log(`${username} doing his ${userwork}`);
    }
    // console.log(userage);                            // non exexcutable bcz its ouside the function or block
    two()
}
one()


if(true){
    const username = "Shailesh";

    if(username === "Shailesh"){
        const usersite = " Stray care";
        console.log(username + usersite)
    }
    // console.log(usersite)
}


console.log(addOne(4));             // if this written before function it will work
function addOne(num){               // function
    return num+1;
}
// addOne(4);

// addTwo(4);                          // if this written before function it will not work
let two = function addTwo(num){     // expression : when holds in variable (also function)
    return num+1
}
// addTwo(4);
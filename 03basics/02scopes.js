{}          // => Scopes
            // checking scopes in console and node is Different

let a = 10;         // Block Scope 
const b = 20;       // Block Scope
var c = 30;         // Global Scope

if(true){
    let a = 100;
    console.log(`Inner let: ${a}`)
}
console.log(`Outer let: ${a}`)

if(true){
    const b = 100;
    console.log(`Inner const: ${b}`)
}
console.log(`Outer const: ${b}`)

if(true){
    var c = 100;
    console.log(`Inner var: ${c}`)
}
console.log(`Outer var: ${c}`)
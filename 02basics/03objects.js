//singleton
//constructor : object.create


// OBJECT LITERALS

let mySymbol = Symbol("symbol1");
let mySym = Symbol("symbol2");


const jsUser = {
    name: "Shailesh",
    age: "21",
    "my email": "shailesh@ok.com",
    location: "Punjab",
    [mySymbol]: "sym1",
    mySym: "sym2"
}

console.log(jsUser.name);
// console.log(jsUser.my email); // error follow below syntax.
console.log(jsUser["name"]);

console.log(jsUser.mySym, typeof(jsUser.mySym));
console.log(jsUser[mySymbol], typeof(jsUser[mySymbol]));

jsUser.name = "anku";
Object.freeze(jsUser); // frezze every data

jsUser.name = "pKl";
console.log(jsUser);

jsUser.greeting = function (){
    console.log("Hello user");
}

jsUser.greetingTwo = function (){
    console.log(`Hello user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

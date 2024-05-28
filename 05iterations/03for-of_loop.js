 // for of
// for (const iterator of object) {}

 const arr = [1, 2, 3, 4, 5]
 for (const num of arr) {
    console.log(num);
 }

// const greeting = "Hello world!";
// for(const greet of greeting){
//     console.log(`Each char of ${greet}`)
// }

const greeting = "Hello world!";
for(const greet of greeting){
    if(greet == " "){
        console.log("space detected")
        break;
    }
    console.log(`Each char of ${greet}`)
}


// Maps

const map = new Map;
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value )
}


// fro-of in object                  //myObject is not iterable

// let myObject = {
//     'game1' : "COC",
//     "game2" : 'BGMI'
// }
// for (const [key, value] of myObject) {
// // for (const {key, value} of myObject) {
//     console.log(key, value)
// }
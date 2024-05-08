let marvel_heros = ["Ironman", "Hulk", "Thor"];
let dc_heros = ["Spiderman", "Batman", "Flash"];

let all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

marvel_heros.push(dc_heros);         // Prefer not to use this type , use "above and below".
console.log(marvel_heros);           // [ 'Ironman', 'Hulk', 'Thor', [ 'Spiderman', 'Batman', 'Flash' ] 
console.log(marvel_heros[3][2]);     // Flash


// SPREAD

const new_heros = [...marvel_heros, ...dc_heros];
console.log(new_heros);


// FLAT

const an_array = [1,2,3, [3,4,5], 5, [6,7,[8,9]]];
console.log(an_array);

const this_array = an_array.flat(1);                // [ 1, 2, 3, 3, 4, 5, 5, 6, 7, [ 8, 9 ] ]
const that_array = an_array.flat(Infinity);         // [ 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9 ]]
console.log(this_array);
console.log(that_array);


console.log(Array.isArray("Shailesh"));         // false
console.log(Array.from("Shailesh"));            // will convert into Array 

console.log(Array.from({name: "Shaileh"}));     // [] empty; we have to specify that what we want to convert in string, key or value.

let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(Array.of(num1, num2, num3));        // [ 10, 20, 30 ]
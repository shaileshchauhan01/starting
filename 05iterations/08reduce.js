// reduce 

// array.reduce( (accummulator, currentValue) => accumulator + currentValue, initialVaalue);

let myNum = [1,2,3,4,5];
const newNum = myNum.reduce( (acc, crValue) => acc + crValue , 0);
console.log(newNum);


const newNums = myNum.reduce( function (acc, crValue) { console.log(`${acc} , ${crValue}`); return acc + crValue }, 0);
console.log(newNums);


const myCart = [
    {
        itemName : "Duracell",
        price : 299
    },
    {
        itemName : "Mug",
        price : 499
    },
    {
        itemName : "Electronics",
        price : 999
    }
];

let total = myCart.reduce( (acc, val) => acc + val.price , 0);
console.log(total);

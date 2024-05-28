//filter / forEach

// const actress = ["Sharadha", "Alia", "Kiara", "Priyanka"]
// const values = actress.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);             // forEach doesn't return values


const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter( (num) => num > 4)
const newNum = myNum.filter( (num) => { return num > 4})
console.log(newNum);


const newNums = []
myNum.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);


const books = [
    {
        title: "Book one", genre: "Fiction", publish: 1987
    }, {
        title: "Book two", genre: "History", publish: 1963
    }, {
        title: "Book three", genre: "Self Development", publish: 2003,
    }, {
        title: "Book four", genre: "Romantic", publish: 2010,
    }, {
        title: "Book five", genre: "Fiction", publish: 1980
    }, {
        title: "Book six", genre: "History", publish: 1955
    }, {
        title: "Book seven", genre: "Self Development", publish: 2001,
    }, {
        title: "Book eight", genre: "Romantic", publish: 2009,
    }
]

let userBooks = books.filter((bk) => bk.genre == "Self Development");
userBooks = books.filter((bk) => bk.publish < 2000);

userBooks = books.filter((bk) => { return bk.genre == "Self Development" && bk.publish > 2000 });
console.log(userBooks);
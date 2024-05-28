// while loop

let i = 0;
while (i <= 20) {
    console.log(`Value of i is ${i}`)
    i = i + 2;
}

let animals = ["dog", "cat", "buffalo", "cow"];
let num = 0;
while(num < animals.length){
    console.log(`Animal number ${num +1} is ${animals[num]}`);
    num = num + 1;      // num++ : same
}


// do-while loop

let score = 11;
do {
    console.log(score);
    score ++;
} while (score <= 10);
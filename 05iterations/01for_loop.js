for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 4) {
        console.log("4 is here")
    }
    console.log(element)
}

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}*${j} = ${i*j}`);
    }
}

let heros = ["Akshay", "Ranbir", "Shahrukh", "Shahid"];
console.log(heros.length);
for (let i = 0; i < heros.length; i++) {
    const element = heros[i];
    console.log(element);
}

// Break and Continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("number 5 is detected, don't continue");
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("number 5 is detected, don't print and continue");
        continue;
    }
    console.log(i);
}
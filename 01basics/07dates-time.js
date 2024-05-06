let date = new Date();

// console.log(typeof date);                    // object
// console.log(date);                           // 2024-05-06T15:36:22.809Z
// console.log(date.toString());                // Mon May 06 2024 15:36:22 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());            // Mon May 06 2024
// console.log(date.toISOString());             // 2024-05-06T15:36:22.809Z
// console.log(date.toJSON());                  // 2024-05-06T15:36:22.809Z
// console.log(date.toLocaleDateString());      // 5/6/2024
// console.log(date.toLocaleString());          // 5/6/2024, 3:36:22 PM
// console.log(date.toLocaleTimeString());      // 3:36:22 PM


// let myDate = new Date(2003, 0, 1);       // month strats from 0 and date starts from 1.
// let myDate = new Date(2003, 0, 1, 8, 0); // 1/1/2003, 8:00:00 AM (.toLocaleString())
let myDate = new Date("01-01-2003");        // 1/1/2003, 12:00:00 AM
// console.log(myDate.toLocaleString());


// let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // milliseconds to seconds

let newDate = new Date();
console.log(newDate);                    // 2024-05-06T17:27:04.100Z
console.log(newDate.getMonth());         // 4
console.log(newDate.getMonth() + 1);     // 5
console.log(newDate.getDay());           // 1

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})
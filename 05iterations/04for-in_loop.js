//for in loop

let myObject ={
    'js': "Javascript",
    'rb': "Ruby",
    'py': "Python"
}
for (const key in myObject) {
  console.log(key, ":", myObject[key])
}

const lang = ["js", "python", "ruby", "java"]
for (const key in lang) {
    console.log(key);
    console.log(lang[key]);
}


// MAP          // non iterable

// const map = new Map;
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('UK', "United Kingdom");

// for (const key in map) {
//    console.log("key")
// }
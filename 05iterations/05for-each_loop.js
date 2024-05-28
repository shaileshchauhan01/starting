// for-each loop

const coding = ["js", "py", "rb", "cpp"]

coding.forEach( function (value) {
    console.log(value)
})

coding.forEach( (value) => {
    console.log(value)
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


coding.forEach((item, index, array) =>  {
    console.log( item, index, array );
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "Ruby",
        languageFileName: "rb",
    }
]
myCoding.forEach( (item)=>{
    console.log(item.languageName)
})
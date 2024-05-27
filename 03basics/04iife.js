// IIFE : Immediately Invoked Function XPathExpression. 

(function good(){
    let username = "Shailesh"
    console.log(username)
})();


(() => {
    console.log(`hello`)
})();


((name) => {
    console.log(`${name}`)
})("Shailesh");

// global scope ke pollution se problem hoti hai kyi baar, to jo global scope ke varibales hai ya jo bhi uskse declaration hai use htane ke liye IIFE ka use kiya jata hai
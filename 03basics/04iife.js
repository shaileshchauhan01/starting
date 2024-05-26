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
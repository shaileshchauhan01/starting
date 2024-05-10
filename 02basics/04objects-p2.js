// OBJECT CONSTRUCTOR

// const tUser = new Object() // both works same, below and this syntax
const tUser = {}

tUser.id = 12;
tUser.email = "o@g.com"

console.log(tUser);

const regUser = {
    id : 123,
    name : {
        fullname : {
            fisrtname : "Shailesh",
            secondname : "Chauhan"
        }
    }
}

console.log(regUser.name);
console.log(regUser.name.allname?.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2} // not recommended

// const obj3 = Object.assign(obj1, obj2) // both syntax give result same 
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // spread
console.log(obj3);


const users =[
    {
        id: 1,
        email: "o@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "q@gmail.com"
    }
]

console.log(users[2].email); 


console.log(tUser);
console.log(Object.keys(tUser));
console.log(Object.values(tUser));
console.log(Object.entries(tUser));

console.log(tUser.hasOwnProperty("email"));
console.log(tUser.hasOwnProperty("name"));



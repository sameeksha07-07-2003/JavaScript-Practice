// Primitive Datatypes (call by value)
//7 types : String , Number , Boolean , null , undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


//Symbol is a special and unique data type used to create unique identifiers for object properties.
//Main use - To avoid property name conflicts in objects — even if two symbols have the same description, they are always unique.

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id) // Symbol(123)
console.log(anotherId)//Symbol(123)
console.log(id == anotherId) //false

const bigNumber = 3384634823846237453984936532n
console.log(typeof bigNumber)


//Non primitive (Reference)

//Array , Object , function'

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name: "sameeksha",
    age: 22,
}
 
const myFunction = function(){
    console.log("hello champ")
}
 
console.log(typeof myFunction)

// Statically Typed Language:
// A language where variable types are declared and checked at compile-time.
// Example (Java): int age = 25; Examples: C, C++, Java, Rust, Go, Kotlin, TypeScript.

// Dynamically Typed Language:
// A language where variable types are determined at runtime without declaring them.
// Example (Python): age = 25 Examples: Python, JavaScript, Ruby, PHP, Lua.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack (primitive) (copy milta) , Heap (non primitive) (reference milti)

let myYoutubeName = "SameekshaBarhaiya"
let anotherName = myYoutubeName //copy is created

anotherName = "chaiaurcode"

console.log(myYoutubeName)//SameekshaBarhaiya
console.log(anotherName) //chaiaurcode

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
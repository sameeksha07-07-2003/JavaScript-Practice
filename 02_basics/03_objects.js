//singletone  - using constructor we create singletone obj
//Object.create

//Object Literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "sam",
    "full Name": "sam B",
    [mySym]: "mysymbolKey1", // mySym: "mysymbolKey1" problem because datatype of mysym is not symbol if to use as symbol the syntax is [mySym]: "mysymbolKey1" 
    age: 18,
    location: "Jaipur",
    email: "sam@g.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}

console.log(JsUser.email) // correct but not good way
console.log(JsUser["email"])

//console.log(JsUser."full name") // here this will not work we have to use [] this way
console.log(JsUser["full Name"])
console.log(JsUser[mySym])

JsUser.email = "sameeksha@gmail.com"
//Object.freeze(JsUser) //freeze karne ke baad aab JsUser mei change nhi kr sakte agar krne ki kosish karenge to error nhi aayega aur chnage bhi nhi hoga

JsUser.email = "prisha@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting) 
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 

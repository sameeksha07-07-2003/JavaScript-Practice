// const tinderUser = new Object() //{} - singletone obj
const tinderUser = {} //not singletone obj it is object literals

tinderUser.id = "23abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "sameeksha",
            lastName: "Barhaiya"
        }
    }
}
console.log(regularUser.fullName.userFullName)

const obj1 = {1:'A',2:'B'}
const obj2 = {3:'A',4:'B'}

//const obj3  = {obj1,obj2} //nested obj
const obj3 = Object.assign(obj1,obj2) 
//better to write const obj3 = Object.assign({},obj1,obj2) 
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const users = [
    {
        id:1,
        email:"h@g.com"
    }, 
    {
        id:2,
        email:"e@g.com"
    }, 
    {
        id:3,
        email:"t@g.com"
    }, 
    {
        id:4,
        email:"y@g.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('id'))

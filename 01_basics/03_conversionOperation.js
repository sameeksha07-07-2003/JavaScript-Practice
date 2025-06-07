let score = "33abcd"

console.log(typeof score) //string
console.log(typeof(score)) // string

let valueInNumber = Number(score) // convert score which is string to number 

console.log(typeof valueInNumber) //number
console.log(valueInNumber); 


// if score = "33" => 33 after conversion to number but if 
// score = "33abc" =>  NaN
//  score = null => 0 
// score = undefined => NaN
// score = true => 1 
// score = false => 0

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) //true
// isLoggedIn = "" => false
//isLoggedIn = "prisha" => true
// isLoggedIn = 1 => true  
// isLoggedIn = 0 => false  
// isLoggedIn = null => false
//isLoggedIn = undefined => false


let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)


let value = 3;
let negValue = -value
console.log(negValue)

console.log("1" + 2)//12
console.log(1 + "2")//12
console.log("1" + 2+ 2)//122
console.log(1+2+"2") //32

console.log(+true) //1
console.log(+"")//0

let num1,num2,num3
num1 = num2= num3 = 2+2 // not good no consistency not good readability

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)
const score = 400
console.log(score)//400

const balance = new Number(100)
console.log(balance)// [Number: 100]

console.log(balance.toString());
console.log(balance.toFixed(2))// how many digit after decimal point

const otherNumber = 28.847391

console.log(otherNumber.toPrecision(3)) //total no

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //comma ko add kr deta hai

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(7.87))
console.log(Math.ceil(4.9))
console.log(Math.floor(8.98))
console.log(Math.min(8,4,5,3,2,51,1))
console.log(Math.max(8,4,5,3,2,51,1))

console.log(Math.random()) // 0 or 1
console.log((Math.random()*10) + 1)  
// Math.random() gives value between 0 to 1 ie like 0.309, 0.5443 
//so when we multiply by 10 -- 0.309 *10 = 3.09, 0.5443 *10 = 5.443
// so now value is between 0 to 9 but to get from 1  to 10 we will add here 1 so if 0.9443 *10 = 9.443 +1 = 10.433 and if 0.0343*10 = 0.343 +1 = 1.343
// to avoid decimal value use floor
console.log((Math.floor(Math.random()*10)) + 1)


const  min = 10 
const max = 20

console.log(Math.floor(Math.random()* (max-min + 1)) + min)
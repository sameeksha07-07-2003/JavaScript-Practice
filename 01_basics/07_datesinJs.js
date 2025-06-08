//Dates

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString()) 
console.log(myDate.toDateString())// Sun Jun 08 2025
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString()) // 6/8/2025, 2:42:25 PM
console.log(myDate.toLocaleDateString()) // 6/8/2025

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23,5,3) //months start from 0 in js
console.log(myCreatedDate.toLocaleString())


let myCreatedDate2 = new Date("2023-01-23") //months start from 01 in YYYY-MM-DD form in js
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp) // it gives result in milisecond from 1 jan 1970
console.log(myCreatedDate.getTime())
// it converts it to the milisecond value from 1 jan 1970 

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) //starting from 0
console.log(newDate.getDay())//starting from 0

newDate.toLocaleString("default",{
    weekday:"long",
})
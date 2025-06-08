const name = "sameeksha" // one way of declaring string
const repoCount  = 50

// console.log(name + repoCount +" Value") //old way not recommended

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);//string interpolation good way to use string (recommened to use)

//another way of declaring string

const gameName = new String("Sameeksha-PS-com")

console.log(gameName[0])
console.log(gameName.__proto__)

//string prototype methods
console.log(gameName.length);
console.log(gameName.toUpperCase()) // it doesnot change original string as premitive data types are call by value
console.log(gameName.charAt(2))
// to find position of charater
console.log(gameName.indexOf('P'))

const newString = console.log(gameName.substring(-3,4)) // 0 is included but 4 is not included (0 -- 3)index or sometime gives undefined
console.log(newString ) 

const anotherString = gameName.slice(-8,4); // for negative value it start from end
console.log(anotherString)

//trim removes starting and ending space
const newStringOne = "  sameeksha      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sameeksha.com/sameeksha%20barhaiay"

console.log(url.replace('%20','-'))

console.log(url.includes('sameeksha'))

console.log(gameName.split('-'))
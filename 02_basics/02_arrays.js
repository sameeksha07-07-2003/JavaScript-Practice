const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros); //array ke andar array aa jayega (push on existing array)
//["thor","Ironman","spiderman",["superman","flash","batman"]]
console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros) //returns new array
console.log(all_heros)//["thor","Ironman","spiderman","superman","flash","batman"]

const all_newHeros = [...marvel_heros,...dc_heros]//... is a spread operator
console.log(all_newHeros)//["thor","Ironman","spiderman","superman","flash","batman"]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //convert into single  1d array

console.log(real_another_array)


console.log(Array.isArray("sam"))
console.log(Array.from("sam"))//convert into array
console.log(Array.from({name: "sam"}))//interesting it give empty array not abel to conver 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


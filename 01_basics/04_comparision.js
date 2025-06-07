// >, <, >= , <= , == , !=
console.log("2" > 1) //true
console.log("02" > 1) //true

console.log(1 == "1") //true
console.log(1 === "1") //false

console.log(null > 0)   //false
console.log(null == 0)   //false
console.log(null >= 0)   //true  
//the reason is that an equality check == and comparision > < >= <= 
//works differently 
//Comparision convert null to a number , treating it as 0
//Thats why (3) null >= 0 is ture and (1) null > 0 is false


console.log(undefined > 0)   //false
console.log(undefined >= 0)   //false
console.log(undefined <= 0)   //false
console.log(undefined == 0)   //false


//array

const arr = [0,9,8,3,5,4]
console.log(arr[4])

//shallow copy and deep copy by sheriyans coding school youtube video harsh 
//shallow copy - same reference 
//eg
let obj = {
    name:"sameeksha",
    age: 25
}

let obj2 = obj  // the obj  is not copied in obj2 by this obj2 is pointing to obj
console.log(obj)
console.log(obj2)

obj2.name = "Prisha"
console.log(obj)
console.log(obj2)

let obj3 = {...obj}//actual copy not reference but this cause problem in nested copy
console.log(obj)
console.log(obj3)


obj3.name = "Yash"
console.log(obj)
console.log(obj3)

//nested obj
let objt = {
    name: "sam",
    social:{
        facebook: {
            ac1:"sam1@g.com",
            ac2:"sam3@g.com"
        },
        instagram:{
            free:{
                ac1:"sam1@g.com"
            },
            paid:{
                ac1:"sam1@g.com"
            }
        }
    }

}


let objt1 =  {...objt} 

console.log(objt)
console.log(objt1)

objt1.social.facebook.ac1 = "changed"

console.log(objt.social.facebook.ac1)
console.log(objt1.social.facebook.ac1)  
//both above result changed changed which means shallow copy this is the problem
//shallow copy hota hai jab aap kisi Object ko copy kren with Object.assign ke through 
//ya fir spread operator ke through, in dono hi cases mei top level properties to cpy ho jati h
//lekin kisi bhi nested object ki properties copy hone ki jagah reference pass kar deti hai 


//deepcopy matlab chahe kitni bhi nested ho ek alag copy bane reference na pass ho 

console.log(typeof JSON.stringify(objt)) //it convert object ot json strigified string 

let objt2 =JSON.parse(JSON.stringify(objt)) //deep copy of objt

objt2.social.facebook.ac1 = "changedNew"


console.log(objt.social.facebook.ac1)
console.log(objt2.social.facebook.ac1)  
//2nd method to create deep copy learn later by same video of sheriyans coding school


//back to chai aur code lec

const arr1 = new Array(3,43,8,24,2,3)
console.log(arr1)

arr1.push(9) //iinsert at end
console.log(arr1)
arr1.pop()//remove from end
console.log(arr1)

arr1.unshift(5) //insert at begin
console.log(arr1)
arr1.shift() //remove from begin
console.log(arr1)

//some methods of array

console.log(arr1.includes(8))
console.log(arr1.indexOf(43))

const newArr = arr1.join()//convert arr1 to sting comma seperated and save it to newArr

console.log(newArr)
console.log(typeof newArr) //string

//slice, splice
console.log("A", arr1)

const myn1 = arr1.slice(1,3)//not include 3
console.log(myn1)
console.log("B",arr1)

const myn2 = arr1.splice(1,3)//include 3
console.log(myn2)
console.log("C",arr1) /// it also change original array
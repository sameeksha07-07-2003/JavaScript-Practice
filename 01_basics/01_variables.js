const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // value is not given than it shows undefined

// accountId = 2

console.log(accountId);
/*
Prefered not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

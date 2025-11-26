const accountId = 144553
let accountEmail = "mohan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // Not Allowed
accountEmail = "sk@sk.com"
accountPassword = "Pass2345"
accountCity = "Bengaluru"

/*
1. Let and var values both can be changed.
2. Prefer not to use var since it does not support block scope and functional scope.
3. If a variable name is just declared and not initialised it becomes undefined.
4. A const variable cannot be left uninitialised.
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
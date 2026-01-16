// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543456655676554n


//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Sachin",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof outsideTemp);

// Data type   :-   Returns
// undefined   :-   undefined
// null        :-   object
// function    :-   object function(but in compiler it returns function only)
// boolean     :-   boolean
// bigInt      :-   bigInt
// number      :-   number
// string      :-   string
// object      :-   object

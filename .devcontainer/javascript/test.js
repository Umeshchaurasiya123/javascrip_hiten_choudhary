// console.log("Hello World");


// // var const and let keyword in javascript. 

// const accoundID=12345; 

// let accountEmail="abcd@gmail.com"

// var accountPassword="12345"

// let accountState; 

// accountCity="mumbai"

// // accondID=2  not allowed. 

// accountEmail="pqrs@gmail.com"

// accountPassword="ashwniloveumesh"

// accountCity="bihar"

// console.table([accountCity,accountState,accountPassword,accountEmail,accoundID])


// chai and code  episoe number 5

"use strict"; //  treat all the js code as newver version. 

//alert(1+2+3) we are using node not browser it will give eror. as in browser javascrit run in binding with html. 

// null is standalone value and undefine is not an value. 

// symbol -> use for uniquness of components. 


// object

// console.log(typeof null);        // object
// console.log(typeof undefined);   // undefined


// episode number 6

// this is for number function Number()
// "33" => 33
// "33abc"=> Nan // not an number its type is even number 
// true=1 ; fasle =0 

// this is for Boolean function Boolean()
// 1=> true ; 0=> fasle 
// "" => false
// "umesh" => true

// now for String function String()

// operation ------------------------------------------------------------------------------------------------------------------

// episode 7 

// episode 8 
// Comparison of datatypes in javascript

// not equality (==) and comparison (=> , <=, >, >) work diffrently

//  comparison convert null to 0  that why  console.log(null<=0) ,console.log(null>=0) is true. 



// console.log("episode 8 data type conversion ")

// console.log(null==0)
// console.log(null>0)
// console.log(null<=0)
// console.log(null>=0)

// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<0)

// strict cheking 
// ==== check even data type as well 
// // == data type not cheked here

// console.log("2"==2)
// console.log("2"===2)

// epidsoe 9

// javascript data type primitive and non primitive. 
//  primitive (non refrence)
//  String , Number , Boolean ,null , Symbol , undefined , BigInt

// non primitive (refrece)
// Array, function, Objects. 
// not primitive  data type returb type are object. 
// function it self is  object function. 

/*
const Id=Symbol(123)
console.log(Id)
// output Symbol(123)
const IDD=Symbol(123)
console.log(IDD)
// output Symbol(123)
console.log(Id===IDD)
// fasle 


const  alphabets =['a','b','c'];


const funVariable=function() {

    console.log(" this is my function");
}

const myObj={

    name:"Umesh Chaurasiya",
    age:25, 
    sex:"vergin", 
    favNumber:69, 
}

console.log(typeof myObj )

console.log(typeof funVariable )

console.log(typeof alphabets )
*/

// episode 10  stack and heap memory types/ 

// primitive data types use stack while non primitive data types usess the heap memory data types. 

// in stack you get the copy of data(primitive data types ) and in heap you will get refrence of data.(non primitive data types)

 // stack (copy of data)
// let myname="umesh chaurasiya"

// let names=myname;

// myname="pres"; 

// console.log(myname);

// console.log(names);



// // heap (refrence of data)

// const objectOne ={

//     mail:"abcd@gmail.com",
//     gender:"male", 
//     age:25
// }

// const objectTwo =objectOne; 

// objectTwo.mail="ashwini@gmail.com"


// console.log(objectOne);

// console.log(objectTwo);


// episode 11 string in javascript


// string concatination 

let wtf="something" 

let value=69

console.log(wtf+" "+value+" string concatination we are doding ");

// good wat of doign this is string interpolation. 

console.log( `this is good way of doing the string interpolation let me print the value ${wtf} now add some more values ${value}`);

// do use some string function. 


const mystrng=new String('first value')

console.log(mystrng)
console.log ( typeof mystrng)

// this string is obejct  it  contains lot of properties as well as to many method as well in side prototype. 

console.log(mystrng.__proto__)

console.log(mystrng[0])

console.log(mystrng.toLowerCase)

console.log(mystrng.split(' '))













